function setup () {
    createCanvas(400,400);
   
}


function draw() {
    background(200);
    noFill();

    // I ran into some problems with trying to increase the frequecy without increasing the size but the answer ended up being making i = something less than zero while increasing the limit it could go to and then decreasing the amount of times it was multiplied by the radius. 
for( var i = .001; i < 41; i++) {
    circle(200,200,i * 5);
}

}