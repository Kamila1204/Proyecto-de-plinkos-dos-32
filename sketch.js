var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
var count=0;
var gameState="Inicio";
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Puntuación : "+score,20,40);
  fill("white");

  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  Engine.update(engine);
  ground.display();


  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null)
    {
       ball.display();
      
       if(ball.body.position.y>760){
        if(ball.body.position.x <330){
          score=score+500;
          ball = null;

        }
        //Termina puntaje 500

        else if (ball.body.position.x> 331 && ball.body.position.x <550){
          score=score+100;
          // Se reinicia la pelotita
          ball = null;
        }

        else if (ball.body.position.x> 551 && ball.body.position.x < 800){
          score=score+200;
          // Se reinicia la pelotita
          ball = null;
        }


//Termina el juego pues el contador llegó a 5
        if(count>=5){
          gameState="end"
      }
       }

       
  
    }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }

   //dos == por comparación de valores
if (gameState=="end"){
  textSize(100)
  text("Game Over", 100, 300)
}
}


function mousePressed()
{
  //diferente de !=
  if( gameState != "end" )
{

  count++;

  ball=new Ball(mouseX, 10, 10, 10)
}  
  
}

