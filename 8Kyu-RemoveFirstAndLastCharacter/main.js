import { from } from "rxjs";
import { filter, reduce } from "rxjs/operators"
import * as R from 'ramda';


export default function removeChar(str) {
  let solution = '';

  from(str).pipe(
    filter((_, index) =>
      !R.or(
        R.and(R.equals(index, 0), !R.equals(index, str.length - 1)),
        R.and(!R.equals(index, 0), R.equals(index, str.length - 1))
      )
    ),
    reduce((accum, char) => {
      return accum + char;
    }, '')
  ).subscribe(result => {
    solution = result
  })

  return solution;
}