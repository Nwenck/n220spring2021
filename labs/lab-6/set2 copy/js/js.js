var colorChange = ['#2500ff', '#645','#f65423']
for(var i = 0; i < 10; i++){
    var speed = (2);
    var myCircle = {
        r: 10,
        x: 0 + i,
        y: 400, 
        color: [0,156,250],
        update: function() {
            this.x += 3;
            circle(myCircle.x,-30*sin(myCircle.x)+myCircle.y,myCircle.r)
        }
    
    }
    var myCircle2 = {
        r: 10,
        x: 0 + i,
        y: 350, 
        
        update: function() {
            fill(200,150,0),
            this.x += 3;
            circle(myCircle2.x,
                -40*sin(myCircle2.x)+myCircle2.y,
                myCircle2.r)
        }
    
    }
    var myCircle3 = {
        r: 10,
        x: 0 + i,
        y: 300, 
        
        update: function() {
            fill(250,50,0),
            this.x += 3;
            circle(myCircle3.x,
                -50*sin(myCircle3.x)+myCircle3.y,
                myCircle3.r)
        }
    
    }
    var myCircle4 = {
        r: 10,
        x: 0 + i,
        y: 450, 
        
        update: function() {
            fill(50,250,0),
            this.x += 3;
            circle(myCircle4.x,
                -60*sin(myCircle4.x)+myCircle4.y,
                myCircle4.r)
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
        
        myCircle.update();
        myCircle2.update();
        myCircle3.update();
        myCircle4.update();
        
        
    }