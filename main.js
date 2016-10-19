(function(){

function main(){
    draw_two_triangles();
    draw_smiley_face();
    draw_triangle();
    draw_rectangle();
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

    if (canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);
    }

    document.body.append(canvas);
}

main();


}())
