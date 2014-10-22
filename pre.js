//we get error in console that copyOnLock is not supported but when uncommenting following lines it could not load external data file so I changed copyOnLock in library_sdl.js
// Module['preRun'] = function() {
//     SDL.defaults.copyOnLock = false;
// }

if (typeof Module === 'undefined') Module = {};

// Module.arguments = ['-nofullscreen', '-nosound'];
// Module.screenIsReadOnly = true;

//Module.arguments = ['-playdemo', 'demo1'];

(function() {
  var start = 0;
  var mean = 0;
  var reportTime = Date.now();

  Module.preMainLoop = function() {
    start = Date.now();
  };
  Module.postMainLoop = function() {
    var now = Date.now();
    var time = now - start;
    if (mean == 0) {
      mean = time;
    } else {
      mean = 0.1*time + 0.9*mean;
    }
    if (now > reportTime + 2000) {
        // var canvas = Module['canvas'];
        // var context = canvas.getContext("2d");

     	var fps = 1000/mean;
      	//console.log('js fps: ' + Math.round(fps));
      	reportTime = now;
		
        Module['fps'] = fps;
		
        // context.fillStyle = "red";
        // context.font = "bold 16px Arial";
        // context.fillText("fps: " + Math.round(fps), 100, 100);
    }
  };
})();
