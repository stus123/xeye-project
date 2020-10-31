const cv = require('opencv');
const { createCanvas, loadImage } = require('canvas')

try {
  var camera = new cv.VideoCapture(0);
  
  var window = new cv.NamedWindow('Video', 0)
  var rectColor = [0, 255, 0];
  var rectColor2 = [255, 0, 0];
   var rectThickness = 1

  setInterval(function() {
    camera.read(function(err, im) {
      if (err) throw err;
      console.log(im.size())
      if (im.size()[0] > 0 && im.size()[1] > 0){
      
               im.detectObject(cv.faaace, {}, function(err, faces) {
                if (err) throw err;
              for (var i = 0; i < faces.length; i++) {
                        face = faces[i];
                    im.rectangle([face.x, face.y] rectColor, rectThickness);
                 }

                 
                   }

                window.show(im);
              
      }
      window.blockingWaitKey(0, 50);
    });
  }, 10); 
} catch (e){
  console.log("Couldn't start camera:", e)
}


