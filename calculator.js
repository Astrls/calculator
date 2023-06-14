let main = document.querySelector("main");

const colOne = ["(", "7", "4", "1", "0"];
const colTwo = [")", "8", "5", "2", "."];
const colThree = ["%", "9", "6", "3", "="];
const colFour = ["AC", "/", "*", "-", "+"];

//Body styling
document.body.style.fontFamily = "Arial";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.padding = "40px";

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

// Styling for the standard buttons
const style = (element) => {
  element.style.backgroundColor = "#a8a8a7";
  element.style.width = "146px";
  element.style.height = "80px";
  element.style.borderRadius = "5px";
  element.style.display = "flex";
  element.style.alignItems = "center";
  element.style.justifyContent = "center";
  element.style.fontSize = "24px";
};

//Apending buttons
const createColumn = (colstart, array) => {
  for (i = 0; i < array.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", `${array[i]}`);
    newDiv.textContent = `${array[i]}`;
    style(newDiv);
    newDiv.style.gridColumn = `${colstart}/${colstart + 1}`;
    newDiv.style.gridRow = `${i + 1}/${i + 2}`;
    calcContainer.append(newDiv);
  }
};

// Creating the columns
createColumn(1, colOne);
createColumn(2, colTwo);
createColumn(3, colThree);
createColumn(4, colFour);

main.append(displayResult);
main.append(calcContainer);

// Adapting the color of specific buttons
let allButtons = document.querySelectorAll(".container > div");
let numbers = "[0-9]";
let operationsButtons = "\\+|\\-|\\*|/";

allButtons.forEach((element) => {
  if (element.id.match(numbers) || element.id.match("\\.")) {
    element.style.backgroundColor = "#e8e8e8";
  } else if (element.id.match("=")) {
    element.style.backgroundColor = "#1c8ced";
  }
});

//Add a log of operations

let logButton = document.createElement("button");
logButton.className = "log-button";
logButton.innerText = "Show/hide previous operations";
logButton.style.width = "220px";
logButton.style.height = "60px";
logButton.style.marginLeft = "190px";
logButton.style.marginTop = "80px";
logButton.style.backgroundColor = "#368a4b";
logButton.style.border = "none";
logButton.style.borderRadius = "10px";
logButton.style.color = "white";
logButton.style.fontWeight = "600";

let opLog = document.createElement("div");
opLog.className = "operation-log";
opLog.style.visibility = "visible";
opLog.style.marginTop = "50px";

document.body.append(logButton);
document.body.append(opLog);

//Add a button to toggle the log
let selectLog = document.querySelector(".operation-log");

document.querySelector("button").addEventListener("click", (event) => {
  if (selectLog.style.visibility == "visible") {
    selectLog.style.visibility = "hidden";
  } else {
    selectLog.style.visibility = "visible";
  }
});

//Calculate
computeResult = (str) => {
  return Function("return " + str)();
};

allButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    let clickElem = event.target.id;
    if (clickElem.match("=")) {
      let newLog = document.createElement("p");
      newLog.append(`${displayResult.innerText}`);
      let finalResult = computeResult(displayResult.innerText);
      displayResult.innerText = finalResult;
      newLog.append(` = ${finalResult}`);
      selectLog.append(newLog);
    } else if (clickElem.match("AC")) {
      displayResult.innerText = 0;
    } else {
      if (displayResult.innerText == "0") {
        displayResult.innerText = clickElem;
      } else if (displayResult.innerText != "0") {
        displayResult.innerText += clickElem;
      }
    }
  });
});

//Use Enter key to calculate
document.addEventListener("keyup", (event) => {
  if (event.code == "Enter") {
    let newLog = document.createElement("p");
    newLog.append(`${displayResult.innerText}`);
    let finalResult = computeResult(displayResult.innerText);
    displayResult.innerText = finalResult;
    newLog.append(` = ${finalResult}`);
    selectLog.append(newLog);
  }
});
