let pieces = [ '#4000f6','#4cf873','#dfe325','#da00af'];

function setup(){
    createCanvas(800, 800);
}
function draw() {
    background(50);
    for (var i = 0; i < pieces.length; i++) {
    stroke(pieces[i]);
    noFill();
    }


}
function mouseDragged() {

    
     rect(mouseX, mouseY, 25 , 25,);
    
}


