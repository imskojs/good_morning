import {from, Observable, Observer, Subject} from "rxjs";
import {buffer, filter, map, pluck, reduce, scan} from "rxjs/operators";

declare var MORSE_CODE: { [key: string]: string };

export default function decodeMorse(morseCode) {
  let solution: string = '';
  const close$ = new Subject<boolean>();

  from(morseCode).pipe(
    scan((accum: { char: string, index: number }, char: string) => {
      accum.char = char;
      accum.index = accum.index + 1;
      return accum;
    }, {char: '', index: -1}),
    emitIf(close$, ({char, index}: { char: string, index: number }): boolean =>
      char === ' ' || index === morseCode.length - 1
    ),
    pluck('char'),
    filter((char: string): boolean => char !== ' '),
    buffer(close$),
    map((code: string[]): string => MORSE_CODE[code.join('')]),
    reduce((sentence: string, letter: string): string => {
      if (letter === undefined && sentence[sentence.length - 1] === ' ') {
        return sentence;
      } else if (letter === undefined) {
        sentence = sentence + ' ';
        return sentence;
      }
      sentence = sentence + letter;
      return sentence;
    }, ''),
  ).subscribe(
    (answer: string): void => {
      solution = answer.trim()
    }
  );
  return solution
}

function emitIf(subject: Subject<boolean>, predicate: (value: any) => boolean) {
  return function emitIfImplementation(source: Observable<any>) {
    return Observable.create((observer: Observer<any>) => {
      const subscription = source.subscribe(
        (value: any) => {
          try {
            observer.next(value)
            if (predicate(value)) {
              subject.next(true);
            }
          } catch (err) {
            observer.error(err)
          }
        },
        err => observer.error(err),
        () => observer.complete()
      );
      return subscription;
    });
  }
}
