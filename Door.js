var Webcom = require('webcom');
var triggerDoor = new Webcom("https://io.datasync.orange.com/base/lom-gateway-demo/lastValue/value/payload/");
 
 
 
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) {
        var v = parseInt(hex.substr(i, 2), 16);
        if (v) str += String.fromCharCode(v);
    }
    //console.log(str);
    return str;
} 

// if (triggerDoor != null)
if(triggerDoor) {
  console.log('hello'  );
} else {
  console.log('false' );
}

triggerDoor.on("value", function(snapshot) {
  
   var msg = snapshot.val();
   console.log('msg');
   console.log('msg', msg); 
  var state=hex2a(msg);
   console.log('sdlsdl');
  
  
   var doorClosed=state == "Door closed!" ? true : false;
  if  (doorClosed) {
    console.log('La porte est fermée');
  } else {
    console.log('La porte est ouverte');
  }
});