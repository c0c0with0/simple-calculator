/*define constants */
const display = document.getElementById("display");
const degscreen = document.getElementById("smallscreen1");
const shiftscreen = document.getElementById("smallscreen2");
const sup = document.querySelectorAll(".scin-act sup");





/*define initioal value*/
display.textContent = "";
let degree = false;
let shift = false;
let formula = "";





/*define required built-in function*/
math.import({
  rad: function (deg) {
    return (deg * Math.PI) / 180;
  },
});

math.import({
  deg: function (rad) {
    return (rad * 180) / Math.PI;
  },
});






/*define calculator finctiona and logic*/
function Shift() {
  if(shift){
    shift = false;
    sup.forEach(supp =>{
      supp.classList.remove('sup')
    });
  }
  else{
    shift = true;
        sup.forEach(supp => {
          supp.classList.add("sup");
        });
  }
  shiftscreen.textContent = shift ? "shift" : "";
}

function Deg() {
  degree ? (degree = false) : (degree = true);
  degscreen.textContent = degree ? "degree" : "";
}

function clearDisplay() {
  display.textContent = "";
  formula = "";
}

function AddParLeft() {
  display.textContent += "(";
  formula += "(";
}

function AddParRight() {
  display.textContent += ")";
  formula += ")";
}

function AddPlus() {
  display.textContent += "+";
  formula += "+";
}

function AddMinus() {
  display.textContent += "-";
  formula += "-";
}

function AddMulti() {
  display.textContent += "*";
  formula += "*";
}

function AddDivi() {
  display.textContent += "/";
  formula += "/";
}

function AddDot() {
  display.textContent += ".";
  formula += ".";
}

function AddZero() {
  display.textContent += "0";
  formula += "0";
}

function Erase() {
  display.textContent = display.textContent.slice(0, -1);
  formula = formula.slice(0, -1);
}

function Addone() {
  display.textContent += "1";
  formula += "1";
}

function Addtwo() {
  display.textContent += "2";
  formula += "2";
}

function Addthree() {
  display.textContent += "3";
  formula += "3";
}

function Addfour() {
  display.textContent += "4";
  formula += "4";
}

function Addfive() {
  display.textContent += "5";
  formula += "5";
}

function Addsix() {
  display.textContent += "6";
  formula += "6";
}

function Addseven() {
  display.textContent += "7";
  formula += "7";
}

function Addeight() {
  display.textContent += "8";
  formula += "8";
}

function Addnine() {
  display.textContent += "9";
  formula += "9";
}

function Tan() {
  switch (degree) {
    case false:
      display.textContent += shift ? "atan(" : "tan(";
      formula += shift ? "atan(" : "tan(";
      break;
    case true:
      display.textContent += shift ? "atan(deg(" : "tan(deg(";
      formula += shift ? "deg(atan(" : "tan(rad(";
      break
  }
}

function Cot() {
  switch (degree) {
    case false:
      display.textContent += shift ? "acot(" : "cot(";
      formula += shift ? "acot(" : "cot(";
      break;
    case true:
      display.textContent += shift ? "acot(deg(" : "cot(deg(";
      formula += shift ? "deg(acot(" : "cot(rad(";
      break
  }
}

function Sin() {
  switch (degree) {
    case false:
      display.textContent += shift ? "asin(" : "sin(";
      formula += shift ? "asin(" : "sin(";
      break;
    case true:
      display.textContent += shift ? "asin(deg(" : "sin(deg(";
      formula += shift ? "deg(asin(" : "sin(rad(";
      break
  }
}

function Cos() {
  switch (degree) {
    case false:
      display.textContent += shift ? "acos(" : "cos(";
      formula += shift ? "acos(" : "cos(";
      break;
    case true:
      display.textContent += shift ? "acos(deg(" : "cos(deg(";
      formula += shift ? "deg(acos(" : "cos(rad(";
      break
  };
}

function EqualFormula() {
  const resault = math.round(math.evaluate(formula),4);
  try {
    const resault = math.round(math.evaluate(formula), 4);
    
    display.textContent = resault;
  } catch {
    display.textContent = "invalid formula";
  }
}

