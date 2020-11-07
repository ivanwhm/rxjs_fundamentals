const input = document.querySelector("input");

input.addEventListener("input", (event) => {
  let text = event.target.value;
  text = parseInt(text);

  if (isNaN(text)) {
    throw new Error("You must enter a number.");
  }

  logValue(text);
});

const logValue = (value) => {
  console.log(`Your value: ${value}`);
};
