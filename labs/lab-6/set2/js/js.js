for(var i = 0; i < 10; i++){
    var speed = (2);
    var myCircle = {
        r: 10,
        x: 200,
        y: 400, 
        color: [156,0,250],
        update: function() {
            // this.x += 3;
            color(20,200,150)
            circle(myCircle.x + random(30, 40),myCircle.y + random(5, 10),myCircle.r + random(5, 10))
        }
    
    }
    }
    function setup() {
        createCanvas(800, 800)
        
    }
    function draw() { 
        background('#000')
        
        fill(myCircle.color);
        circle(myCircle.x,myCircle.y,myCircle.r)
        myCircle.update();
        
        
    }