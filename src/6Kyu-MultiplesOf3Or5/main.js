import { range } from "rxjs";
import { filter, reduce, tap } from "rxjs/operators";

export default function solution(num) {
  let answer = 0;
  range(1, num - 1)
    .pipe(
      filter(num => {
        if (num % 3 === 0 || num % 5 === 0) {
          return true
        }
      }),
      reduce((accum, num) => {
        return accum + num
      }, 0)
    )

    .subscribe(result => answer = result)

  return answer;

}
