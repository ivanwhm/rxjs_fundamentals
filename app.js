const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // Throw the value 1 into the pipeline
  subscriber.next(1);

  // Marks the observable as complete, no more values will come out
  subscriber.complete();

  // Emit an error, no more values will come out
  subscriber.error(new Error("Something bad happen"));
});

observable.subscribe(
  (value) => console.log("Next value:", value), // next
  (err) => console.error("Bad Thing", err), //error
  () => console.log("Complete") //completion
);

observable;
