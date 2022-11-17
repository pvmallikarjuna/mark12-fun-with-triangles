const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");

const outputEl = document.querySelector("#output");

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  if((angleInputs[0].value >= '1') && angleInputs[1].value >= '1' && angleInputs[2].value >= '1'){
    const sumOfAngles = calcSumOfAngles(Number(angleInputs[0].value),Number(angleInputs[1].value),Number(angleInputs[2].value));
    if(sumOfAngles===180){   
      outputEl.innerText = "Yes! The angles form a Triangle";
    }else{
      outputEl.innerText = "Not a Triangle ";
    }
  }else {
    outputEl.innerText = "Angles cannot be negative or 0. Please enter valid 3 angles!";
  }
}
isTriangleBtn.addEventListener("click", isTriangle);
