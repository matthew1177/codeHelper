
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
  var arr = document.getElementsByClassName('error_line');
  for(i = 0; i < arr.length; i++){
      var errMsg = arr[i].parentElement.textContent;
      console.log(errMsg);
      
      var newErrMsg = errMsg.match( /[a-zA-Z]+(?=[^‘’”:]*(?:[:‘’'"“”][^:‘’'"“”]*[‘:’'"“”][^‘:’'"“”]*)*$)/g );
      if(newErrMsg[2] === "invalid" && newErrMsg[3] === "conversion"){
        console.log("pls convert variable types properly idiot");
      }
      else{
        console.log(newErrMsg.join(''));    
        getErrorByName(newErrMsg.join('')).then(console.log);   
      } 
      
      
      

      //console.log(text.replace(arr[i], /[a-zA-Z]+(?=[^‘’'"“”:]*(?:[:‘’'"“”][^:‘’'"“”]*[‘:’'"“”][^‘:’'"“”]*)*$)/g ));
      //console.log(arr[i]);
      //console.log(new);
      //array.join('')
    //var outputBox = document.getElementById("interactive-terminal-container");
    startButton.onmouseover = function() {mouseover()};

    startButton.onmouseover = function() {
      
      }
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
  //console.log(name)
  return resp
}