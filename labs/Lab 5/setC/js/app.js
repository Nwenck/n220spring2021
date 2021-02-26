let paintcolor = ["#9b5151", "#e97878", "#f5d782","#ffee93"];

function setup ()    {
    createCanvas(800, 800,);
    background(50);
}
 function draw() {
     for(var i = 0;i < paintcolor.length;i++) {
        //  fill(250)
         noStroke();
         translate(20, 20)
     circle(mouseX - i, mouseY - i, 20)
     fill(paintcolor[i])
     if(mouseIsPressed) {
        
        background(50); 
        }
     }
    

    
}