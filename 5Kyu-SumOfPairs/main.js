import { from, of } from "rxjs";
import { withLatestFrom, skip, scan, filter, take, concatMap, map } from "rxjs/operators";
import * as R from "ramda";

export default function sum_pairs(ints, s) {

  let solution = undefined;

  from(ints).pipe(
    skip(1),
    scan((acc, val) => ({ val, i: R.inc(acc.i) }), { i: 0 }),
    concatMap(obj => from(ints).pipe(
      take(obj.i),
      withLatestFrom(of(obj.val))
    )),
    filter(([front, last]) => front + last === s),
    take(1),
  )
    .subscribe(result => solution = result);

  return solution;
}


