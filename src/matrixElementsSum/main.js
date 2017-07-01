import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

// func is available for platform to run
export default function func(x) {
  Observable.of(1, 2, 3)
    .map(x => x + '!!!').subscribe(value => console.log(x));
}