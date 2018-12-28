//  https://www.codewars.com/kata/recursive-replication/train/javascript

import {range} from "rxjs";
import {mapTo, toArray} from "rxjs/operators";

export default function replicate(times: number, number: number) {
  let solution: [] = [];

  range(0, times).pipe(
    mapTo(number),
    toArray()
  ).subscribe(
    (array: []) => solution = array
  );

  return solution;

}
