function setup() {

var yellow = "#fff000"
var blue = "#2857b5"



    createCanvas(800,600);

    
background(yellow);

strokeWeight(5)
    rect(80, 70, 300, 250)

    stroke(0)
    strokeWeight(3)
    fill(200,10,125)
    circle(120,110, 30)
    circle(310,110, 30)

    arc(200, 265, 90, 90, 0, PI + QUARTER_PI, CHORD)
    stroke(2)
    strokeWeight(4)
    line(250, 200, 200, 20)
strokeWeight(2)
    ellipse(200,190,50,25)

fill(blue)
ellipse(440,440,200,75)

strokeWeight(2)
    ellipseMode(CORNER);
fill(255);
ellipse(450, 400, 50, 50); 
ellipseMode(CORNERS);
fill(100);
ellipse(460, 410, 485, 430);


strokeWeight(2)
    ellipseMode(CORNER);
fill(255);
ellipse(350, 400, 50, 50); 
ellipseMode(CORNERS);
fill(100);
ellipse(360, 410, 385, 430);

strokeWeight(3)
line(400, 455, 450, 455)



    
}