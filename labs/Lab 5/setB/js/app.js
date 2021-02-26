var y = 0;
var speed = 3;

function setup ()    {
    createCanvas(800, 800,);
    
}



function draw() {
    background(50);
    circle( 200, y, 15 );
    rect(mouseX, 780,100,20)
    
    if(y > 765 || y < 0) {
        speed = speed * -1
    }
    y = y + speed;
}



