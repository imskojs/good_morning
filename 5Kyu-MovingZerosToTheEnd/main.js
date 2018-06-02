import { from, concat } from "rxjs";
import { partition, bufferCount } from "rxjs/operators";

export default function moveZeros(arr) {
  let solution = [];
  const [nonZero$, zero$] = from(arr).pipe(
    partition(val => val !== 0)
  );

  concat(nonZero$, zero$).pipe(
    bufferCount(arr.length)
  )
    .subscribe(result => solution = result);

  return solution;
}