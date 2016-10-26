;(function(){

function artGallery(){
  // get images
  var images = document.images;

  for(var i=0; i<images.length; i++){
    if(images[i].getAttribute("id") != "frame"){
      // create canvas
      var canvas = document.createElement("canvas");
      canvas.setAttribute("width", 132);
      canvas.setAttribute("height", 150);
      var ctx = canvas.getContext("2d");

      // insert canvas
      images[i].parentNode.insertBefore(canvas, images[i]);

      // draw image
      ctx.drawImage(images[i], 15, 20);

      // draw frame
      var frame = document.getElementById("frame");
      ctx.drawImage(frame, 0, 0);
    }
  }
}

document.body.onload = function(){
  artGallery();
};

})();
