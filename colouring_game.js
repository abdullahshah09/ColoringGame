const container = document.getElementsByClassName("grid-container");
const colors = ["red", "blue", "green", "purple", "orange", "gray"];
const gridSize = 6;
let gridColors = [];
let displaySeconds;
let displayMinutes;

for(let i = 0; i < gridSize; i++) {
  gridColors = gridColors.concat(colors);
}

const body = document.body;

const grid = {
  clicked1: 0,
  clicked2: 0
};

var topDiv = document.createElement("div");

let newClick = null;
let prevClick = null;

function onButtonClicked(e) {
  // button.getAttribute("data-index");

  newClick = e.target;

  topDiv.innerHTML = newClick.style.backgroundColor;
  topDiv.style.backgroundColor = newClick.style.backgroundColor;
  
  this.style.border = "2px solid white";

  if(prevClick != null && newClick != null ) {
    this.style.border = "2px solid black";
    prevClick.style.border = "2px solid black";

    var prevIndex = prevClick.getAttribute("data-index");
    var newIndex = newClick.getAttribute("data-index");

    if(prevIndex !== newIndex) {
      if(prevClick.style.backgroundColor == "orange" && newClick.style.backgroundColor == "orange") {
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null;
      } else if(prevClick.style.backgroundColor == "red" && newClick.style.backgroundColor == "red") {
  
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null;
      } else if(prevClick.style.backgroundColor == "green" && newClick.style.backgroundColor == "green") {
  
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null;
      } else if(prevClick.style.backgroundColor == "purple" && newClick.style.backgroundColor == "purple") {
  
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null;
      } else if(prevClick.style.backgroundColor == "gray" && newClick.style.backgroundColor == "gray") {
  
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null;
      } else if(prevClick.style.backgroundColor == "blue" && newClick.style.backgroundColor == "blue") {
  
        newClick.style.backgroundColor = "black";
        prevClick.style.backgroundColor = "black";
        prevClick = null; 
      } else {
        prevClick.style.border = "2px solid red";
        this.style.border = "2px solid red";
        prevClick = newClick;
        prevClick = null;
      }
    } else {
      topDiv.innerHTML = "Cannot be same grid item!";
      topDiv.style.backgroundColor = "black";
    }
  } else {
    prevClick = newClick;
  }

  var itemsInGrid = document.getElementsByClassName("grid-item");
  var itemsArray = Array.prototype.slice.call(itemsInGrid);

  const allItemsBlack = (blackItems) => blackItems.style.backgroundColor == "black";

  let result = itemsArray.every(allItemsBlack);
  
  if(result == true) {
    topDiv.innerHTML = "Gave Over - " + displayMinutes + ":" + displaySeconds;
    adjDiv.remove("adjDiv");
  }



  




}

function createGrid() {

  topDiv.setAttribute("id", "topDiv");
  //Shuffle array 
  for(let i = 0; i < gridColors.length; i++) {
    let randomSpot = Math.floor(Math.random() * gridColors.length);
    
    //ES5 swap
    // var temp = gridColors[randomSpot];
    // gridColors[randomSpot] = gridColors[i];
    // gridColors[i] = temp;

    //ES6 swapp
    [gridColors[i], gridColors[randomSpot]] = [gridColors[randomSpot], gridColors[i]];

  }

  for (let i = 0; i < 36; i++) {
    var button = document.createElement("button");
    button.setAttribute("data-index", i);

    var randomColor = gridColors[i];

    button.setAttribute("class", "grid-item");
    
    button.style.backgroundColor = randomColor;

    container[0].appendChild(button);

    button.addEventListener("click", onButtonClicked);

  }

  body.prepend(topDiv);

}



document.body.onload = function startButton() {

  var adjDiv = document.createElement("div");
  adjDiv.setAttribute("id", "adjDiv");
  
  body.appendChild(adjDiv);

  adjDiv.textContent = "00:00";
  var startButton = document.createElement("button");
  startButton.setAttribute("id", "startButton");
  adjDiv.appendChild(startButton);
  startButton.textContent = "START";
  startButton.addEventListener("click", function() {
    window.setInterval(stopwatch, 1000);
    createGrid();
  })



  //Define vars to hold time values
let seconds = 0;
let minutes = 0;

  //stopwatch function (logic to determine when to increment next value)

  //define vars to hold display values


function stopwatch() {
  seconds++;
  //logic to determine when to increment next value

  if(seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if(minutes / 60 === 1) {
      minutes = 0;
    }

    
  }
  //if seconds/minutes/hours are only one digit, add a leading 0 to value

  if(seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds
  }
  if(minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }
  //display updated time values to user

  document.getElementById("adjDiv").innerHTML = displayMinutes + ":" + displaySeconds;

}
}

