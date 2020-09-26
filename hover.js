
var width = document.getElementById("interactive-terminal-container").offsetWidth;
console.log(width);

var startButton = document.createElement('button');
startButton.id = "startButton";
startButton.className = "button"


startButton.tooltiptext = "Hello";

startButton.setAttribute('data-tooltip', 'test123123')

createStartButton();

function createStartButton(){
  document.body.appendChild(startButton);
}

function hover()
{
    startButton.onmouseover = function() {mouseover()};

    startButton.onmouseover = function() {

        //alert("I am an alert box!");
        console.log("yes");
      }
      startButton.onmouseout = function() {

      }
}

hover();

async function getErrorByName (name) {
  let resp =  await fetch('https://firestore.googleapis.com/v1/projects/errors-61ec7/databases/(default)/documents/C%2b%2b/'+name)
  resp = await resp.json()
  return resp
}