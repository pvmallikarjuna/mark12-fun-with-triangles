const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const outputEl = document.querySelector("#output");

function calcSquareOf(a, b) {
  return a * a + b * b;
}
function calcHypotenuse() {
  if(  Number(sides[0].value) >= 1 && Number(sides[1].value) >= 1){
  const hypo = Math.sqrt(
    calcSquareOf(Number(sides[0].value), Number(sides[1].value))).toFixed(2);
  outputEl.innerText = "Length of Hypotenuse is : "+ hypo;
}else {
  outputEl.innerText = "Please enter positive value.";
}
}

hypotenuseBtn.addEventListener("click", calcHypotenuse);
