//getting the selectors
const gateBtn = document.getElementById("btn");
let output = document.querySelector("#output .output");

// the main function for not gate
gateBtn.addEventListener("click", function () {
  let input = document.querySelector("#input input").value.trim();
  output.textContent = "";
  let newString = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == '0') newString[i] = '1';
    else if (input[i] == '1') newString[i] = '0';
    else if (input[i] == 'x') newString[i] = 'x';
  }
  output.textContent = newString.join("");
});
