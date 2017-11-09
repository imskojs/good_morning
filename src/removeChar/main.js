import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

export default function removeChar(str) {
  let x = '';
  Observable.from(str)
    .filter(function (_, index) {
      if (index === 0) { return false; }
      else if (index === this.length - 1) { return false }
      else { return true }
    }, str)
    .subscribe(chr => {
      x += chr;
    })
  return x;
}