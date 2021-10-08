canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(400, 300, 50, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", jiya);

function jiya(e){
    mouse_x = e.clientX - canvas.offsetLeft; 
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(mouse_x, mouse_y, 50, 0, 2*Math.PI);
ctx.stroke()
}