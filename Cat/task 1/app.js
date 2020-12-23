// getting the selectors
const reverseBtn = document.getElementById("btn");
let span = document.querySelector(".span");
let output = document.querySelector("#output .output");

// the main function to reverse a string
reverseBtn.addEventListener("click", function () {
  let input = document.querySelector("#input input").value.trim();
  output.textContent = "";
  if (input.length < 2) span.classList.add("show");
  else {
    span.classList.remove("show");
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    output.textContent = reversed;
  }
});
