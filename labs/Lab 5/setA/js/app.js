let boxColor = ['#3686ff', '#45aa00', '#80ae0f'];
console.log(boxColor)

var myRect = {
x: 200,
y: 200,
w: 200,
h: 200,
color:(boxColor) 
}


function setup ()    {
    createCanvas(800, 800,);


    
}

function draw() {
    background(50);

    for (var i = 0; i < boxColor.length; i++) {
        // fill(boxColor[i])
        rect(myRect.x, myRect.y, myRect.w, myRect.h);
    
     if (mouseIsPressed) {
            fill(boxColor[i])
        } 
        // if(true){
        // boxColor.length = 2 
        // i = 0
        // }
    }
    
    
    
}

// function mouseClicked(){
//     boxColor + 1
// }


