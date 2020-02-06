const { of, Observable } = require('rxjs');
const { map, filter, take } = require('rxjs/operators');

const data = of(1, 2, 3, 4, 5);


// operators
data.pipe(
  take(4), 
  map(value => value + 1),
  filter(value => value > 3)
).subscribe(console.log)


const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});
 
console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');