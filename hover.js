
var width = document.getElementById("interactive-terminal-container").offsetWidth;
console.log(width);

var startButton = document.createElement('div');
startButton.id = "startButton";
startButton.className = "button"

//startButton.tooltiptext = "Hello";

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
        console.log(newErrMsg.join(''));    
        getErrorByName(newErrMsg.join('')).then((obj) => {
          let strval = obj.fields.response.stringValue
          console.log(strval) // TODO
          startButton.setAttribute('data-tooltip', "Try this: " + strval)
        });
      
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
  return resp
}