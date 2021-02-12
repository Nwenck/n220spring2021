var purple = rgba(128,0,230);
var black = rgba(0,0,0)
var green = rgba(0,180,0)


let colors = [black ,black ,purple ,black ,green ,black ,black ,black ,black ,black ,black ,black ,black ,black ,green]

function setup () {
    createCanvas(800,400);

}

function draw() {
    console.log(colors)
    background(200)



for(var i = 1; i < 25; i++) {
    circle(20 * i ,200,5)
    // fill(colors)
}




}