
var width = document.getElementById("interactive-terminal-container").offsetWidth;
console.log(width);
/*
var link = document.createElement('link')
link.rel = 'stylesheet'
link.href = //'chrome-extension://immnleonmkkjkhjplihadojmpbgcpnlk/hover.css'//chrome.runtime.getURL('hover.css')
//console.log(chrome.runtime.getURL('hover.css'));
document.head.appendChild(link)
*/
var startButton = document.createElement('button');
startButton.id = "startButton";
startButton.className = "button"
//startButton.style.cssText = "position:absolute;width:1005px;height:234.25px;top:78%;left:20%;color: #ffffff;background-color: red; border: transparent;"


startButton.tooltiptext = "Hello";

startButton.setAttribute('data-tooltip', 'test123123')

createStartButton();

function createStartButton(){
  document.body.appendChild(startButton);
}

function hover()
{
    //var outputBox = document.getElementById("interactive-terminal-container");
    startButton.onmouseover = function() {mouseover()};

    startButton.onmouseover = function() {

        //alert("I am an alert box!");
        console.log("yes");
      }
      startButton.onmouseout = function() {

      }
}

hover();

