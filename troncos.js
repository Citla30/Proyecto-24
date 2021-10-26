class troncos{
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':5.0,
          'density':0.5,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width = 20;
      this.height = height;
      this.image = loadImage("madera.jpg");

      Matter.Body.setAngle(this.body,angle);
      
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
      stroke("papayawhip");
      fill("saddlebrown");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  