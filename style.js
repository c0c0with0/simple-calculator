

const display=document.getElementById('display');
const backgroundvideo = document.getElementById("backgroundvideo");


display.textContent = "";
let polar = false;

function clearDisplay(){
    display.textContent="";
}

function AddParLeft(){
    display.textContent += "(";
}

function AddParRight(){
  display.textContent += ")";
}

function AddPlus(){
  display.textContent += "+";
}

function AddMinus(){
    display.textContent += "-";
}

function AddMulti(){
   display.textContent += "*"; 
}

function AddDivi(){
    display.textContent += "/";
}

function AddDot(){
   display.textContent += "."; 
}

function AddZero(){
   display.textContent += "0";  
}

function ReversPolar(){
    let temp = display.textContent ;
    display.textContent = "function is not set";
    setTimeout(() => {
        display.textContent = temp;
    },2000);
}

function Addone(){
    display.textContent += "1"; 
}

function Addtwo(){
  display.textContent += "2";  
}

function Addthree(){
    display.textContent += "3";
}

function Addfour() {
  display.textContent += "4";
}

function Addfive() {
  display.textContent += "5";
}

function Addsix() {
  display.textContent += "6";
}

function Addseven() {
  display.textContent += "7";
}

function Addeight() {
  display.textContent += "8";
}

function Addnine() {
  display.textContent += "9";
}

function EqualFormula(){
    try{
      const resault = math.evaluate(display.textContent);
      display.textContent = resault;
    }

    catch{
        display.textContent = "invalid formula"
    }
}