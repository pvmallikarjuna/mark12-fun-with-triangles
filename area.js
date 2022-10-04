const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");

const outputEl = document.querySelector("#output");


function calcArea() {
  const totArea = ((Number(sides[0].value)) * (Number(sides[1].value)))/2;
  outputEl.innerText = "Area of Triangle is : "+ totArea.toFixed(1);
}

areaBtn.addEventListener("click", calcArea);
