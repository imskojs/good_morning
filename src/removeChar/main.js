import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

import { or, equals, and } from 'ramda';


export default function removeChar(str) {
  let x = '';
  Observable.from(str)
    .filter((_, index) =>
      !or(
        and(equals(index, 0), !equals(index, str.length - 1)),
        and(!equals(index, 0), equals(index, str.length - 1))
      )
    )
    .subscribe(chr => {
      x += chr;
    })
  return x;
}