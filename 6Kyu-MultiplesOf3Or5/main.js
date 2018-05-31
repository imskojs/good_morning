import { range } from "rxjs";
import { filter, reduce, tap } from "rxjs/operators";
import * as R from "ramda";

const isZero = R.equals(0);

export default function solution(num) {
  let answer = 0;
  range(1, num - 1)
    .pipe(
      filter(num => R.or(isZero(num % 3), isZero(num % 5))),
      reduce((accum, num) => accum + num, 0)
    )
    .subscribe(result => answer = result)

  return answer;

}
