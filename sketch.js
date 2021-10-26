const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var fondo;
var t1,t2,t3,t4,t5,t6,t7; 
var p1,p2;
var box1, box2;
var llave,cuadro,suelo;
var plane;
var texto2,c1;
var piedra,hule,hierro;

function preload(){
    fondo=loadImage("fondo.jpg");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    t1 = new troncos (600,100,200,20,PI/7);
    p1 = new Pelota(1000,100,100);
    t2 = new troncos (1000,250,700,PI/3);
    box1 = new box(200,550,170,100);
    box2 = new box(420,550,170,100);
    t3= new log (310,400,300,30);
    t4= new log (310,120,300,30);
    t5= new box (310,150,200,100);
    t6= new box (310,80,200,100);
    t7= new Repisa (250,80,300,20);
    p2=new Pelota (600,10,100);
    piedra=new Stone (350,70);
    hierro=new Hierro(250,20,70,50);
    hule = new Rubber(140,10,20);
    texto2=new texto(900,450,300,200);
    suelo = new troncos (900,170,700,PI/3);
    llave= new Choc(400,-30,50,70);
    c1=new cancha(700,500,300,300);
}

function draw(){
    background(fondo);
    Engine.update(engine);
    
    suelo.display();
    //plane.display();
    hammer.display();
    t1.display();
    p1.display();
    t3.display();
    box1.display();
    box2.display();
    t4.display();
    t5.display();
    t6.display();
    p2.display();
    piedra.display();
    hierro.display();
    hule.display();
    t7.display();
    texto2.display();
    llave.display();
    c1.display();
      
    

}