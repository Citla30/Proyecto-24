class Rubber{
	constructor(x, y) {
		var options = {
		'restitution':0.8,
		'friction':0.9,
		'density':12,
		
		}
		this.body = Bodies.circle(x, y, 30,options);
		this.width = 70;
		this.height = 50;
		this.image=loadImage("pelota.png");
		
		World.add(world, this.body);
	}
	display(){
		var pos =this.body.position;
		var angle=this.body.angle;
		push();
		translate(pos.x,pos.y);
		rotate(angle);
		strokeWeight(3);
		stroke("white");
		fill("black");
		ellipseMode(RADIUS);
		image(this.image,0, 0, this.width, this.height);
		pop();
	}
	};
	