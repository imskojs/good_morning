import {from, of} from "rxjs";
import {bufferCount, map, take, withLatestFrom} from "rxjs/operators";

export default function getMiddle(word: string) {

  let solution: string;

  from(word).pipe(

    bufferCount(Math.floor(word.length / 2) + 1),

    withLatestFrom(of(word.length)),

    map(([word, mid]: [string[], number]): string => {
      if (mid % 2 === 0) {
        return word.slice(-2).join('')
      }
      return word.slice(-1).join('')
    }),

    take(1)

  ).subscribe(answer => solution = answer);

  return solution

}
