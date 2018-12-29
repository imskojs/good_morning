import {from, Observable, of} from "rxjs";
import {concatMap, distinct, filter, groupBy, map, mergeMap, tap, toArray, withLatestFrom} from "rxjs/operators";
import {path} from "rambda";

type WinMap = { rock: 'paper', paper: 'scissors', scissors: 'rock' };
export default function oracle(gestures) {
  let solution: string
  // Get number of scissors etc
  from(gestures).pipe(
    groupBy((hand: string): string => hand),

    mergeMap((handStream: Observable<string>): Observable<string[]> => {
      return handStream.pipe(toArray())
    }),

    withLatestFrom(from(gestures).pipe(
      distinct(), toArray()
    )),

    filter(([hands, uniqueGestures]: [string[], string[]]): boolean => {
      return hands.length >= Math.floor(gestures.length / uniqueGestures.length)
    }),

    map(path('0.0')),

    withLatestFrom(of({rock: 'paper', paper: 'scissors', scissors: 'rock'})),

    map(([hand, winMap]: [string, WinMap]): string => {
      return winMap[hand];
    }),

    toArray(),

    map((hands: string[]): string => {
      return hands.join('/')
    })
  ).subscribe(
    (answer: string): void => {
      solution = answer
    }
  )


  return solution;


}
