
var width = document.getElementById("interactive-terminal-container").offsetWidth;
console.log(width);

if (document.getElementById('startButton')) {
  document.getElementById('startButton').parentElement.removeChild(document.getElementById('startButton'))
}
/*
var startButton = document.createElement('div');
startButton.id = "startButton";
startButton.className = "button"
*/
var startButton = document.getElementById('bottom-component')
startButton.className = ("button")
startButton.classList.add('split-pane-component')

var spanInStart = document.createElement('span')
spanInStart.classList.add('beforestartbuttnon')
spanInStart.innerHTML = "Everything looks good!"
//startButton.tooltiptext = "Hello";

//startButton.innerHTML = ''
startButton.appendChild(spanInStart)

//createStartButton();

function createStartButton(){
  document.body.appendChild(startButton);
}

function linkify(text) {
  var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function(url) {
      return '<a target="_blank" href="' + url + '">' + url + '</a>';
  });
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
          spanInStart.innerHTML = "Try this: " + linkify(strval)
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