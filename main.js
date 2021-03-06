(function(){

function main(){
    draw_title_text();
    draw_intersecting_rectangles();
    draw_two_triangles();
    draw_smiley_face();
    draw_triangle();
    draw_rectangle();
    draw_arcs();
    draw_quadratic_curves();
    draw_cubic_curves();
    draw_game_map();
    draw_path2d();
    fill_style_palettes();
    stroke_palettes();
    global_alpha();
    rgba_rectangles();
    line_width();
    line_cap();
    line_join();
    miter_limit();
    line_dash();
    linear_gradient();
    radial_gradient();
    create_pattern();
    shadows();
    fill_rules();
    fill_text();
    text_baseline();
    line_graph();
    tiling_image();
    framing_image();
    save_restore();
    translating();
    rotating();
    scaling();
    transforming();
    stars_sky();
    star(50);
    clipping();
}


function createCanvas(attrValDict){
  var canvas = document.createElement("canvas");
  for(var key in attrValDict){
    canvas.setAttribute(key, attrValDict[key]);
  }
  document.body.append(canvas);
  return canvas;
}

function draw_title_text(){
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "title-text");
  //canvas.style.display = "block";
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.font = "40px serif";
    ctx.textBaseline = "hanging";
    ctx.strokeText("HTML5 Canvas", 0, 10);
    ctx.strokeText("例子汇集", 0, 60);
  }
}


function draw_intersecting_rectangles(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
    }
}


function draw_two_triangles(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(105, 25);
        ctx.lineTo(25, 105);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
            
    }
}


function draw_smiley_face(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI*2, true);
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI*2, true);
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI*2, true);
        ctx.stroke();
    }
}


function draw_triangle(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if (canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.lineTo(75, 50);
        ctx.fill();
    }
}


function draw_rectangle(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if (canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }

}

function draw_arcs(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        for (var i=0; i<4; i++) {
            for (var j=0; j<3; j++) {
                ctx.beginPath();
                var x = 25 + j*50;
                var y = 25 + i*50;
                var radius = 20;
                var startAngle = 0;
                var endAngle = Math.PI + (Math.PI*j)/2;
                var anticlockwise = i%2==0 ? false : true;

                ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

                if (i>1){
                    ctx.fill();
                } else{
                    ctx.stroke();
                }
            }
        }
    }
}

function draw_quadratic_curves(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);
        ctx.stroke();
    }
}

function draw_cubic_curves(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fill();
    }
}


// A utility function to draw a rectangle with rounded corners.
function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.arcTo(x,y+height,x+radius,y+height,radius);
  ctx.lineTo(x+width-radius,y+height);
  ctx.arcTo(x+width,y+height,x+width,y+height-radius,radius);
  ctx.lineTo(x+width,y+radius);
  ctx.arcTo(x+width,y,x+width-radius,y,radius);
  ctx.lineTo(x+radius,y);
  ctx.arcTo(x,y,x,y+radius,radius);
  ctx.stroke();
}

function draw_game_map(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        roundedRect(ctx,12,12,163+20,163+20,15);
        roundedRect(ctx,19,19,150+20,150+20,9);
        roundedRect(ctx,53,53,49,33,10);
        roundedRect(ctx,53,119,49,16,6);
        roundedRect(ctx,135,53,49,33,10);
        roundedRect(ctx,135,119,25,49,10);

        ctx.beginPath();
        ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
        ctx.lineTo(31,37);
        ctx.fill();

        for(var i=0;i<8;i++){
          ctx.fillRect(51+i*16,35,4,4);
        }

        for(i=0;i<6;i++){
          ctx.fillRect(115,51+i*16,4,4);
        }

        for(i=0;i<8;i++){
          ctx.fillRect(51+i*16,99,4,4);
        }

        ctx.beginPath();
        ctx.moveTo(83,116);
        ctx.lineTo(83,102);
        ctx.bezierCurveTo(83,94,89,88,97,88);
        ctx.bezierCurveTo(105,88,111,94,111,102);
        ctx.lineTo(111,116);
        ctx.lineTo(106.333,111.333);
        ctx.lineTo(101.666,116);
        ctx.lineTo(97,111.333);
        ctx.lineTo(92.333,116);
        ctx.lineTo(87.666,111.333);
        ctx.lineTo(83,116);
        ctx.fill();

        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91,96);
        ctx.bezierCurveTo(88,96,87,99,87,101);
        ctx.bezierCurveTo(87,103,88,106,91,106);
        ctx.bezierCurveTo(94,106,95,103,95,101);
        ctx.bezierCurveTo(95,99,94,96,91,96);
        ctx.moveTo(103,96);
        ctx.bezierCurveTo(100,96,99,99,99,101);
        ctx.bezierCurveTo(99,103,100,106,103,106);
        ctx.bezierCurveTo(106,106,107,103,107,101);
        ctx.bezierCurveTo(107,99,106,96,103,96);
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101,102,2,0,Math.PI*2,true);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(89,102,2,0,Math.PI*2,true);
        ctx.fill();
    }
}

function draw_path2d(){
    var canvas = document.createElement("canvas");
    document.body.append(canvas);

    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        var rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);
        ctx.stroke(rectangle);

        var circle = new Path2D();
        circle.moveTo(125, 35);
        circle.arc(100, 35, 25, 0, 2*Math.PI);
        ctx.fill(circle);
    }
}

function fill_style_palettes(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    for(var i=0; i<7; i++){
      for(var j=0; j<7; j++){
        var rgbValue = "rgb(" + 
                            Math.floor(255 - i*42.5) + ", " +
                            Math.floor(255 - j*42.5) + ", 0)";
        ctx.fillStyle = rgbValue;         
        ctx.fillRect(j*25, i*25, 25, 25);
      }
    }
  }
}


function stroke_palettes(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    for (var i=0; i<6; i++){
      for (var j=0; j<6; j++){
        ctx.beginPath();
        ctx.arc(12.5+j*25, 12.5+i*25, 10, 0, Math.PI*2, true);
        var rgbValue = "rgb(" + 
                            Math.floor(255 - i*42.5) + ", " +
                            Math.floor(255 - j*42.5) + ", 0)";
        ctx.strokeStyle = rgbValue;
        ctx.stroke();
      }
    }
  }
}


function global_alpha(){
  // create canvas
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");


    // draw rectangle
    ctx.fillStyle = "#FD0";
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = "#6C0";
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = "#09F";
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = "#F30";
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = "#FFF";

    ctx.globalAlpha = 0.2;

    // draw circles
    var centerX = 75, centerY = 75;
    for (var i=0; i<7; i++){
      ctx.beginPath();
      ctx.arc(centerX, centerY, (i+1)*10, 0, Math.PI*(2), false);
      ctx.fill();
    }

  }
}


function rgba_rectangles(){
  // create canvas
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // draw large rectangle of banner
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.fillRect(0, 0, 300, 50);
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fillRect(0, 50, 300, 50);
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(0, 100, 300, 50);

    // draw small rectangles of grids
    for (var i=0; i<3; i++){
      for (var j=0; j<10; j++){
        rgbaValue = "rgba(255, 255, 255, " + j*0.1 + ")";
        ctx.fillStyle = rgbaValue;
        ctx.fillRect(j*30, i*50, 30, 50);
      }
    }
  }
}

function line_width(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    for(var i=1; i<9; i++){
      ctx.lineWidth = 1 + i;
      ctx.beginPath();
      ctx.moveTo(i*10, 0);
      ctx.lineTo(i*10, 150);
      ctx.stroke();
    }
  }
}

function line_cap(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // draw guide lines
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10, 30);
    ctx.lineTo(200, 30);
    ctx.moveTo(10, 120);
    ctx.lineTo(200, 120);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    // draw vertical lines
    ctx.lineWidth = 15;
    ctx.strokeStyle = "black";
    lineCapList = ["butt", "round", "square"];

    for (var i=0; i<3; i++){
      ctx.beginPath();
      ctx.moveTo(50+i*30, 30);
      ctx.lineTo(50+i*30, 120);
      ctx.lineCap = lineCapList[i];
      ctx.stroke();
    }
  }
}

function line_join(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  var lineJoinList = ["round", "bevel", "miter"];

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 15;
    for(var i=0; i<lineJoinList.length; i++){
      ctx.beginPath();
      ctx.moveTo(10, 10 + i*40);
      ctx.lineTo(70, 40 + i*40);
      ctx.lineTo(130, 10 + i*40);
      ctx.lineTo(190, 40 + i*40);
      ctx.lineTo(250, 10 + i*40);
      ctx.lineJoin = lineJoinList[i];
      ctx.stroke();
    }
  }
}


function miter_limit(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  miterLimitList = [0, 4, 10, 20];
  miterLimitCounter = 0;
  function draw(){
    if(canvas.getContext){
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw guides
      ctx.strokeStyle = "#09f";
      ctx.lineWidth = 2;
      ctx.strokeRect(5, 50, 160, 50);

      // Set line styles
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 10;

      if (miterLimitCounter > miterLimitList.length-1){
        miterLimitCounter = 0;
      }
      ctx.miterLimit = miterLimitList[miterLimitCounter];
      miterLimitCounter++;

      // Draw lines
      ctx.beginPath();
      ctx.moveTo(0, 100);
      for (var i=0; i<20; i++){
        var dy = i % 2 == 0 ? 25 : -25;
        ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
      }
      ctx.stroke();
    }
  }
  setInterval(draw, 2*10*1000/60);

}

function line_dash(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
  }

  var offset = 0;
  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setLineDash([15, 12]);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100);
  }

  function march(){
    if (offset > 160){
      offset = 0;
    }
    offset++;
    draw();
    setTimeout(march, 1000/60);
  }
  march();
}

function linear_gradient(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    var linGrad = ctx.createLinearGradient(10, 10, 130, 130);
    linGrad.addColorStop(0, "blue");
    linGrad.addColorStop(0.5, "green");
    linGrad.addColorStop(0.5, "yellow");
    linGrad.addColorStop(1, "red");

    ctx.fillStyle = linGrad;
    //ctx.strokeStyle = linGrad;

    ctx.fillRect(10, 10, 130, 130);
    ctx.strokeRect(50, 50, 50, 50);
  }
}


function radial_gradient(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // create radial gradient object
    var radGrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);

    // add color stop
    radGrad.addColorStop(0, "#A7D30C");
    radGrad.addColorStop(0.9, "#019F62");
    radGrad.addColorStop(1, "rgba(1, 159, 98, 0)");

    var radGrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
    radGrad2.addColorStop(0, "#FF5F98");
    radGrad2.addColorStop(0.75, "#FF0188");
    radGrad2.addColorStop(1, "rgba(255, 1, 136, 0)");

    var radGrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
    radGrad3.addColorStop(0, "#00C9FF");
    radGrad3.addColorStop(0.8, "#00B5E2");
    radGrad3.addColorStop(1, "rgba(0, 201, 255, 0)");

    var radGrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
    radGrad4.addColorStop(0, "#F4F201");
    radGrad4.addColorStop(0.8, "#E4C700");
    radGrad4.addColorStop(1, "rgba(228, 199, 0, 0)");

    // draw shapes
    ctx.fillStyle = radGrad4;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radGrad3;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radGrad2;
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle = radGrad;
    ctx.fillRect(0, 0, 150, 150);
  }
}


function create_pattern(){
  var canvas = createCanvas({"id": "create-pattern"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // create new image object to use as pattern
    var img = new Image();
    img.src = "img/Canvas_createpattern.png";
    img.onload = function() {
      // create pattern
      var pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, 300, 150);
    };
  }
}

function shadows(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 20;
    ctx.shadowBlur = 2;
    ctx.shadowColor = "rgba(0, 0, 0, 1)";

    ctx.font = "30px Times New Roman";
    ctx.fillStyle = "green";
    ctx.fillText("Shadows Here...", 50, 75);
  }
}

function fill_rules(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, Math.PI*2, true);
    ctx.arc(50, 50, 15, 0, Math.PI*2, true);
    ctx.fill("evenodd");
  }
}


function fill_text(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.font = "48px serif";
    ctx.fillText("Hello World", 10, 50);
    ctx.font = "30px serif";
    ctx.strokeText("Hello Computer", 10, 100);
  }
}


function text_baseline(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.font = "48px sans-serif";
    ctx.textBaseline = "top";
    ctx.strokeText("Text Baseline", 0, 50);
  }
}

function line_graph(){
  var canvas = createCanvas({"id": "line-graph"});

  if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = "img/backdrop.png";
    img.onload = function(){
      ctx.drawImage(img, 0, 0);
      ctx.beginPath();
      ctx.moveTo(30, 96);
      ctx.lineTo(70, 66);
      ctx.lineTo(103, 76);
      ctx.lineTo(170, 15);
      ctx.stroke();
    }
  }
}

function tiling_image(){
  var canvas = createCanvas({"id": "tiling-image"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "img/rhino.jpg";
    img.onload = function(){
      for(var i=0; i<4; i++){
        for(var j=0; j<3; j++){
          ctx.drawImage(img, j*50, i*38, 50, 38);
        }
      }
    }
  }
}

function framing_image(){
  var canvas = createCanvas({"id": "framing-image"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    var frame = new Image();
    frame.src = "img/Canvas_picture_frame.png";
    frame.onload = function(){
      ctx.drawImage(frame, 0, 0);
    };

    var rhino = new Image();
    rhino.src = "img/rhino.jpg";
    rhino.onload = function(){
      ctx.drawImage(rhino, 33, 71, 104, 124,
                           20, 21, 87, 104);
    };

  }
}


function save_restore(){
  var canvas = document.createElement("canvas");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, 150, 150);   // Draw a rectangle with default settings
    ctx.save(); // Save the default state

    ctx.fillStyle = "#09F"; // Make changes to the settings
    ctx.fillRect(15, 15, 120, 120); // Draw a rectangle with new settings

    ctx.save(); // Save the current state
    ctx.fillStyle = "#FFF";  // Make changes to the settings
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90);   // Draw a rectangle with new settings

    ctx.restore();  // Restore previous state
    ctx.fillRect(45, 45, 60, 60);   // Draw a rectangle with restored settings

    ctx.restore();  // Restore original state
    ctx.fillRect(60, 60, 30, 30);   // Draw a rectangle with restored settings
  }
}

function translating(){
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "translating");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    for(var i=0; i<5; i++){
      for(var j=0; j<5; j++){
        ctx.save();
        var rgbValue = "rgb(" + (51*i) + ", " + (255-51*j) + ", 255)"; 
        ctx.fillStyle = rgbValue;
        ctx.fillRect(10 + 50*j, 10 + 30*i, 25, 25);
        ctx.restore();
      }
    }
  }
}


function rotating(){
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "rotating");

  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // Left rectangles, rotate from canvas origin
    ctx.save();

    ctx.fillStyle = "#0095DD";
    ctx.fillRect(30, 30, 100, 100);
    ctx.save();

    ctx.rotate((Math.PI/180)*25);
    ctx.fillStyle = "#4D4E53";
    ctx.fillRect(30, 30, 100, 100);
    ctx.restore();

    // Right rectangles, rotate from rectangle center
    ctx.fillStyle = "#0095DD"
    ctx.fillRect(150, 30, 100, 100);

    ctx.translate(150+50, 30+50);
    ctx.fillStyle = "#4D4E53";
    ctx.rotate((Math.PI/180)*45);
    ctx.translate(-(150+50), -(30+50)); // Translate back
    ctx.fillRect(150, 30, 100, 100);
  }
}

function scaling(){
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "scaling");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.save();
    ctx.fillStyle = "green";
    ctx.fillRect(1, 10, 10, 10);

    ctx.scale(10, 3);
    ctx.fillStyle = "blue";
    ctx.fillRect(1, 10, 10, 10);
    ctx.restore();

    ctx.font = "24px serif";
    ctx.fillStyle = "red";
    ctx.translate(10, 80);
    ctx.rotate((Math.PI/180)*90);
    ctx.translate(-10, -80);
    ctx.fillText("Jacob", 10, 80);
  }
}


function transforming(){
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "transforming");
  document.body.append(canvas);

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    var sin = Math.sin(Math.PI/6);
    var cos = Math.cos(Math.PI/6);
    ctx.translate(100, 100);
    var c = 0;
    for(var i=0; i <= 12; i++){
      c = Math.floor((255/12) * i);
      ctx.fillStyle = "rgb(" + c + ", " + c + ", " + c + ")";
      ctx.fillRect(0, 0, 50, 10);
      ctx.transform(cos, sin, -sin, cos, 0, 0);
    }
  }
}

function stars_sky(){
  var canvas = createCanvas({"id": "stars-sky"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    // Draw background
    var linGrad = ctx.createLinearGradient(0, 0, 0, 150);
    linGrad.addColorStop(0, "#232256");
    linGrad.addColorStop(1, "#143778");
    ctx.fillStyle = linGrad;
    ctx.fillRect(0, 0, 300, 150);

    stars();
    // Draw stars
    function stars(){
      for(var j=1; j<=100; j++){
        ctx.save();
        ctx.fillStyle = "#FFF";
        ctx.translate(300 - Math.floor(Math.random()*300),
                      150 - Math.floor(Math.random()*150));
        drawStar(ctx, Math.floor(Math.random()*4)+2);
        ctx.restore();
      }
    }

  }
}

function drawStar(ctx, r){
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for(var i=0; i<9; i++){
    ctx.rotate(Math.PI/5);
    if(i%2 === 0){
      ctx.lineTo((r/0.525731)*0.200811, 0);
    }else{
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function star(r){
  var canvas = createCanvas({"id": "star"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 300, 150);

    ctx.translate(150, 75);
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(r, 0);
    for(var i=0; i<9; i++){
      ctx.rotate(Math.PI/5);
      if(i%2 == 0){
        ctx.lineTo((r/0.525731)*0.200811, 0);
      }else{
        ctx.lineTo(r, 0)
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

function clipping(){
  var canvas = createCanvas({"id": "clipping"});

  if(canvas.getContext){
    var ctx = canvas.getContext("2d");

    ctx.fillRect(0, 0, 150, 150);
    ctx.translate(75, 75);

    // Create a circular clipping path
    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI*2, true);
    ctx.clip();

    // Draw background
    var linGrad = ctx.createLinearGradient(0, -75, 0, 75);
    linGrad.addColorStop(0, "#232256");
    linGrad.addColorStop(1, "#143778");

    ctx.fillStyle = linGrad;
    ctx.fillRect(-75, -75, 150, 150);

    // Draw stars
    for(var j=1; j<50; j++){
      ctx.save();
      ctx.fillStyle = "#fff";
      ctx.translate(75-Math.floor(Math.random()*150),
                    75-Math.floor(Math.random()*150));
      drawStar(ctx, Math.floor(Math.random()*4)+2);
      ctx.restore();
    }

  }
}

main();


}())
