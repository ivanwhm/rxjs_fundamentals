const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

const observable = fromEvent(input, "input").pipe(
  map((event) => event.target.value),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error("Enter a number.");
    }
    return value;
  })
);

observable;

// const input = document.querySelector("input");

// input.addEventListener("input", (event) => {
//   let text = event.target.value;
//   text = parseInt(text);

//   if (isNaN(text)) {
//     throw new Error("You must enter a number.");
//   }

//   logValue(text);
// });

// const logValue = (value) => {
//   console.log(`Your value: ${value}`);
// };
