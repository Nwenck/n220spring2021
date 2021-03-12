// Make an object with all the properties for a graphic on the screen - width, height, color, position. In your create or draw function draw that object using the data in your object.


for(var i = 0; i < 10; i++){
var speed = (2);
var myCircle = {
    r: 10,
    x: 0 + i,
    y: 400, 
    color: [156,0,250],
    update: function() {
        this.x += 3;
        circle(myCircle.x,20*sin(myCircle.x)+myCircle.y,myCircle.r)
    }

}
}
function setup() {
    createCanvas(800, 800)
    
}
function draw() { 
    background('#000')
    
    fill(myCircle.color);
    myCircle.x + speed;
    circle(myCircle.x,myCircle.y,myCircle.r)
    myCircle.update();
    
    
}

