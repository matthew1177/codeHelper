/*var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.top = '0';
renderer.domElement.style.left = '0';
renderer.domElement.style.margin = '0';
renderer.domElement.style.position = 'fixed';
renderer.domElement.style.zIndex=9999999999;
//document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometry, material );
cube.position.x = 90;
//scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	//cube.rotation.x += 0.03;
	//cube.rotation.y += 0.03;

	renderer.render( scene, camera );
};

//animate();*/



var startButton = document.createElement('button');
startButton.id = "startButton";
startButton.innerHTML = 'methodHelper';
startButton.style.cssText += "font-family: 'Linux Libertine','Georgia','Times',serif;";
startButton.style.cssText = "position:absolute;width:96px;height:46px;top:0.65%;left:56.5%; border:none; border-radius: 5px;";
createStartButton();
document.getElementById("startButton").addEventListener("click", start);

function createStartButton(){
    document.body.appendChild(startButton);
}


function start(){
        //startButton.style.cssText = "visibility:'hidden'";

        var word = getSelectionText()

        getFunctionByName(word).then(obj => {
            let strval = obj.fields.response.stringValue
            console.log(strval) // TODO
            //document.body.appendChild( renderer.domElement );
            //scene.add( cube );
            //animate();
            createInfoButton(strval);
        })
    
}

function linkify(text) {
  var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  return text.replace(urlRegex, function(url) {
      return '<a target="_blank" href="' + url + '">' + url + '</a>';
  });
}

function createInfoButton(str)
{
    var info = document.createElement('div');
    info.id = "infoButton";
    info.innerHTML = linkify(str);
    info.style.cssText += "font-family: 'Linux Libertine','Georgia','Times',serif;";
    info.style.cssText = "position:absolute;width:fit-content;height:fit-content;top:90%;left:60%;text-align:left;padding:10px;font-size: 15px; border-radius: 5px; background: #efefef;";
    document.body.appendChild(info);
}


var render = function() {
    requestAnimationFrame(render);

    renderer.render(scene, camera); 
}

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

async function getFunctionByName (name) {
    let resp =  await fetch('https://firestore.googleapis.com/v1/projects/errors-61ec7/databases/(default)/documents/Methods/'+name)
    resp = await resp.json()
    return resp
  }