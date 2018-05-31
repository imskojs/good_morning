import { from, range } from "rxjs";
import { scan, reduce, map, concatMap, skipLast } from "rxjs/operators";
import * as R from "ramda";

export default function accum(s) {
  let solution = ``;

  from(s).pipe(

    scan((acc, val) => ({ upper: val.toUpperCase(), lower: val.toLowerCase(), i: acc.i + 1 }), { i: 0 }),

    concatMap(({ i, upper, lower }) => {
      let mumblePartGen = R.cond([
        [R.equals(0), R.always(upper)], [R.equals(i), R.always(`-`)], [R.T, R.always(lower)]
      ]);
      return range(0, i + 1).pipe(map(mumblePartGen))
    }),

    skipLast(1),

    reduce((accum, str) => accum + str, ``),
  )
    .subscribe(result => solution = result)

  return solution;
}
