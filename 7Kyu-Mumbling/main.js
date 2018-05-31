import { from } from "rxjs";
import { scan, reduce, map } from "rxjs/operators";

export default function accum(s) {
  let solution = '';

  from(s).pipe(

    scan((acc, value) => {
      return { value, index: acc.index + 1 }
    }, { value: '', index: -1 }),

    map(obj => {
      const { index, value } = obj;
      let str = value.toUpperCase()
      const rest = value.toLowerCase()
      for (let i = 0; i < index; i++) {
        str = str + rest;
      }
      return str;
    }),

    reduce((acc, str) => {
      if (acc.length === 0) {
        return str;
      }
      return acc + '-' + str
    }, '')
  )
    .subscribe(result => solution = result)

  return solution;
}
