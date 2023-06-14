let main = document.querySelector("main");

const colOne = ["(", "7", "4", "1", "0"];
const colTwo = [")", "8", "5", "2", "."];
const colThree = ["%", "9", "6", "3", "="];
const colFour = ["AC", "/", "X", "-", "+"];

//Display for the result
let displayResult = document.createElement("div");
displayResult.className = "display-result";
displayResult.style.border = "lightgrey solid 2px";
displayResult.style.width = "600px";
displayResult.style.fontSize = "40px";
displayResult.style.textAlign = "right";
displayResult.style.paddingRight = "10px";
displayResult.style.margin = "10px 0px";
displayResult.style.borderRadius = "10px";
displayResult.style.height = "100px";
displayResult.innerText = "0";
displayResult.style.display = "flex";
displayResult.style.alignItems = "flex-end";
displayResult.style.justifyContent = "flex-end";

// Styling for the standard buttons
const style = (element) => {
  element.style.backgroundColor = "lightgrey";
  element.style.width = "146px";
  element.style.height = "80px";
  element.style.borderRadius = "5px";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.fontSize = "24px";
};

// // Styling for the grid
let calcContainer = document.createElement("div");
calcContainer.className = "container";
calcContainer.style.display = "grid";
calcContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
calcContainer.style.gridTemplateRows = "repeat(5, 1fr)";
calcContainer.style.columnGap = "10px";
calcContainer.style.rowGap = "10px";
calcContainer.style.alignItems = "stretch";
calcContainer.style.maxWidth = "600px";


//Apending buttons
let createColumn = (colstart, array) => {
  for (i = 0; i < array.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = `${array[i]}`;
    newDiv.textContent = `${array[i]}`;
    style(newDiv);
    newDiv.style.gridColumn = `${colstart}/${colstart + 1}`;
    newDiv.style.gridRow = `${i + 1}/${i + 2}`;
    calcContainer.append(newDiv);
  }
};

createColumn(1,colOne)
createColumn(2,colTwo)
createColumn(3,colThree)
createColumn(4,colFour)

main.append(displayResult);
main.append(calcContainer);
