var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  var databaseref = database.ref('ball/position');
  databaseref.on("value", readPositon, showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();

}

function readPositon(data){
  position = data.val();
  console.log(position.x);
  console.log(position.y);
  ball.x = position.x;
  ball.y = position.y;

}

function showError(){
console.log("error in reading or writing to the database")

}

function writePosition(x,y){
   database.ref('ball/position').set({
       'x':ball.x+x,
       'y':ball.y+y
   });

}

