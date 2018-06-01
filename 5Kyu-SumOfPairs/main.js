import { from } from "rxjs";
import { scan, map, filter, take } from "rxjs/operators";
import * as R from "ramda";


export default function sum_pairs(ints, s) {
  let solution;

  from(ints).pipe(

    scan((mem, val) => {
      if (mem.val === undefined) { return { val }; }
      let lastVal = mem.val;
      mem[lastVal] = true;
      mem.val = val;
      return mem;
    }, {}),

    map(obj => {
      let diff = s - obj.val
      if (obj[diff] === true) { return [diff, obj.val] }
      return []
    }),

    filter(array => array.length === 2),

    take(1)

  )
    .subscribe(result => solution = result);

  return solution;

}


