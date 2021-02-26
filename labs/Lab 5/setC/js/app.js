
// the colors that are drawn being held in the array
let paintcolor = ["#9b5151", "#e97878", "#f5d782","#ffee93"];
// the canvas and color of the canvas
function setup ()    {
    createCanvas(800, 800,);
    background(50);
}
// for loop with no stroke and the origin is moved to the point 20,20. The circles that are being created are following the mouses x and y coordinates and the paint fill is each of the colors in the array for each new circle. 
 function draw() {
     for(var i = 0;i < paintcolor.length;i++) {
        //  fill(250)
         noStroke();
         translate(20, 20)
     circle(mouseX, mouseY, 20)
     fill(paintcolor[i])
    //  everytime the mouse is pressed it whipes the screen as if to start over.
     if(mouseIsPressed) {
        
        background(50); 
        }
     }
    

    
}