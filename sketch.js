 var database;
 var player,playerCount;
 var background1;
 var bgImg,laserImg,spaceship1Img,spaceship2Img;
 var bg,laser,spaceship1,spaceship2;
 var gameState = 0;
 
 function preload(){
bgImg = loadImage("images/bg.png")
laserImg = loadImage("images/laser.jpg")
spaceship1Img = loadImage("images/spaceship1.png")
spaceship2Img = loadImage("images/spaceship2.png") 
}

function setup() {
  createCanvas(displayWidth-0,displayHeight-111);
  background1 = createSprite(displayWidth/2+50,displayHeight)
  background1.addImage(bgImg)
  background1.scale = 2.3
  spaceship1 = createSprite(displayWidth/2+500,displayHeight/2)
  spaceship1.addImage(spaceship1Img)
  spaceship1.scale = 0.1;
  spaceship2 = createSprite(displayWidth/2-500,displayHeight/2)
  spaceship2.addImage(spaceship2Img)
  spaceship2.scale = 0.35;

}

function draw() {
  background(0)
    
    if(keyIsDown(RIGHT_ARROW)){
    spaceship1.x = spaceship1.x+3;
    }
   
      if(keyIsDown(LEFT_ARROW)){
        spaceship1.x = spaceship1.x-3;
        }
        if(keyIsDown(UP_ARROW)){
          spaceship1.y = spaceship1.y-4;
          }
          if(keyIsDown(DOWN_ARROW)){
            spaceship1.y= spaceship1.y+4;
            }

            if(keyDown("D")){
              spaceship2.x = spaceship2.x+3;
              }
             
                if(keyDown("A")){
                  spaceship2.x = spaceship2.x-3;
                  }
                  if(keyDown("W")){
                    spaceship2.y = spaceship2.y-4;
                    }
                    if(keyDown("S")){
                      spaceship2.y= spaceship2.y+4;
                      }
  background1.velocityX = -4
                   
  if(background1.x<0){
background1.x =  width/12
  }    

  drawSprites()
}