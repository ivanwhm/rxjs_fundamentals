const { Observable } = Rx;

const observable = new Observable((subscriber) => {
  // Throw the value 1 into the pipeline
  subscriber.next(1);

  // Marks the observable as complete, no more values will come out
  subscriber.complete();

  // Emit an error, no more values will come out
  subscriber.error(new Error("Something bad happen"));
});

observable.subscribe({
  next(value) {
    console.log(`Got a value: ${value}`);
  },
  complete() {
    console.log("Observable is complete. Don't expect any more values.");
  },
  error(err) {
    console.error("Bad Thing!", err);
  },
});

observable;
