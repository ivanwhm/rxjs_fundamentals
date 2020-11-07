const { Observable } = Rx;
const { tap } = RxOperators;

const observable = new Observable((subscriber) => {
  // Throw the values into the pipeline
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  // Marks the observable as complete, no more values will come out
  subscriber.complete();

  // Emit an error, no more values will come out
  subscriber.error(new Error("Something bad happen"));
}).pipe(tap((value) => console.info(value)));

observable.subscribe(
  (value) => console.log("Next value:", value), // next
  (err) => console.error("Bad Thing", err), // error
  () => console.log("Complete") // completion
);

observable.subscribe(
  (value) => console.log("From 2nd subscribe", value), // next
  (err) => console.error("Bad Thing", err), // error
  () => console.log("Complete") // completion
);

new Observable(() => {});
