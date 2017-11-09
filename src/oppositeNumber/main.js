import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export default function opposite(number) {
  let x = null;  // side effect usually not recommended
  // When observable has finite time line it is synchronous
  Observable.of(number)
    .map(number => -number)
    .subscribe(answer => {
      x = answer
    })
  return x;
}