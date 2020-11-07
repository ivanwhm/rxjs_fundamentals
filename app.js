const { fromEvent } = Rx;

const input = document.createElement("input");
const container = document.querySelector(".container");
container.appendChild(input);

const observable = fromEvent(input, "input");

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
