let positionsX = [0,0,0,0,0,0,0,0,0,0];
let positionsY = [0,0,0,0,0,0,0,0,0,0];

let back = 0


function setup(){
    createCanvas(1400, 800);
    back = random(255);
    
}
function draw() {
    background(back);
    fill(250,50,50);
    positionsX.push(mouseX);
    positionsX.shift();
    positionsY.push(mouseY);
    positionsY.shift();
    for(var i = 0; i < positionsX.length; i++) {
        circle(positionsX[i],positionsY[i],20);
    }
    
    if(mouseIsPressed) {
        back = color(random(255), random(255),random(255));
    }
    console.log(positionsX.length)
}

