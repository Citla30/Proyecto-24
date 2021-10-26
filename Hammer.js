class Hammer {
  constructor(x, y) {
    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 130;
    this.height = 80;
    this.image=loadImage("martillo.png");

    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('orange')
    imageMode(CENTER)
    image(this.image,0, 0, this.width, this.height);
    pop();
  };
};
