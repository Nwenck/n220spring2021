let icecream = ['rgba(139,100,65)','rgba(255,225,215)','rgba(250,245,195)'];



function setup() {
    createCanvas(800, 500);
    for(var i = 0; i < icecream.length; i++) {
    
    }
    fill( icecream[i]);
             rect(20 * i, 0, 200, 400);
             console.log(i);
    if(i == icecream.length) {
        i = 0;
    }

}

// function draw(){


// }




