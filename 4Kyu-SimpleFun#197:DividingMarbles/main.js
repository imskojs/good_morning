import { from, concat, of } from "rxjs";
import { take, tap, repeat, map, switchMap } from "rxjs/operators";

export default function dividingMarbles(marbles) {
  let count = [0, 0, 0, 0, 0, 0]
  const [one$, two$, three$, four$, five$, six$] = marbles.map((num, index) => {
    return from(Array(num).fill(index + 1))
  })
  function re() {
    return count;
  }
  of(1).pipe(
    switchMap(_ => {
      console.log(re())
      return concat(
        one$.pipe(take(count[0])),
        two$.pipe(take(count[1])),
        three$.pipe(take(count[2])),
        four$.pipe(take(count[3])),
        five$.pipe(take(count[4])),
        six$.pipe(take(count[5]))
      )
    }),
    tap(_ => count[0] = 1),
    repeat(2)
  )
    .subscribe(result => console.log(result));
}

dividingMarbles([2, 2, 2, 2, 2, 2])