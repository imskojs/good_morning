// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

// func is available for platform to run

function func() {
  var x = 0;
  Observable.of(1, 2, 3)
    .map(x => x + '!!!')
    .subscribe(value => console.log('before'));
  console.log('after 111')
  return x
}

console.log(func);

