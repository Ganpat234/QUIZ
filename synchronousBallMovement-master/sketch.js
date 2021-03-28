var database;
var playerCount;
var gameState = 0;
var form;


function setup(){
  database = firebase.database();
  
  createCanvas(displayWidth-20, displayHeight-30);

  
  
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)

  }
    if(gameState===1){
      clear()
      game.play()
    }
  
}

