var dog, happyDog, database, food, foodStock
var dogHappyImg,dogSadImg






function preload()
{
  dogHappyImg=loadImage("images/dogImg.png")
  dogSadImg=loadImage("images/dogImg1.png")
}

	
  function setup() {
    database = firebase.database();
    foodStock= database.ref("food");
    foodStock.on("value", readStock, showError);
    createCanvas(500, 500);
  
   dog = createSprite(250, 250, 10, 10);
  dog.addImage("dogSadImg",dogSadImg)
  dog.addImage("dogHappyImg",dogHappyImg);
  dog.scale=0.5
   
}




function draw() {  
  background(46,139,87);
  if (keyDown(UP_ARROW)) {
      writeStock(food);
     dog.changeImage("dogHappyImg",dogHappyImg);
     dog.scale=0.5
  }1
  if(food==0){
    dog.changeImage("dogHappyImg",dogHappyImg);
    console.log("its working");
  }
  drawSprites();
 textSize(30);
fill("white")
 text("food remaining"+food,107,92)
 text(mouseX+","+mouseY,mouseX,mouseY);

 //add styles here
 text("note press up arrow to feed milk", 60,470)

}


function showError() {
  console.log("There is a mismatch"); 
}

function readStock(data){
food= data.val();


}

function writeStock(foodCount){
if(foodCount == 0){
  foodCount=0
}
else{
  foodCount=foodCount-1
}
database.ref("/").update({
food:foodCount
})

}