;(function(){
  var sun = new Image();
  var moon = new Image();
  var earth = new Image();
  var canvas;

  function init(){
    sun.src = '../img/Canvas_sun.png';
    moon.src = '../img/Canvas_moon.png';
    earth.src = "../img/Canvas_earth.png";
    canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    document.body.append(canvas);
    window.requestAnimationFrame(draw);
  }

  function draw(){

    var ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300);
    ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
    ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    var time = new Date();
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24);
    ctx.drawImage(earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI*2, false);
    ctx.stroke();

    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
  }

  init();
}());
