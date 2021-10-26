class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':30,
          
      }
      this.body = Bodies.rectangle(x, y,80,40, options);
      this.width = 80;
      this.height = 90;
      this.image=loadImage("piedra.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("chocolate");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };