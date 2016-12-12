var namespace = "http://www.w3.org/2000/svg"

var foodEaten = 0;

var positionX = 550;
var positionY = 250;
var foodY;
var foodX;
var foodYB;
var foodXB;
var width = 10;
var height = 20;
var message = "";
var timeStart = Date.now()
var end= "";

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    positionX -=10;
    document.getElementById("scaryskeleton").setAttribute("x", positionX)
  }
  else if (e.keyCode == 39) {
    positionX +=10;
    document.getElementById("scaryskeleton").setAttribute("x", positionX)
  }
  if(e.keyCode == 40){
    positionY +=10;
    document.getElementById("scaryskeleton").setAttribute("y", positionY)
  }
  else if (e.keyCode == 38) {
    positionY -=10;
    document.getElementById("scaryskeleton").setAttribute("y", positionY)
  }

  foodY = Number(document.getElementById("foodthing").getAttribute("y"))
  foodX = Number(document.getElementById("foodthing").getAttribute("x"))

  if(positionX > foodX - width && positionX < foodX + width && positionY >foodY - height && positionY < foodY + height) {
    console.log("message")
    document.getElementById("foodthing").setAttribute("y", randomNumber(0, 300))
    foodEaten = foodEaten + 1
    document.getElementById("scoreboard").textContent = foodEaten
  }

  foodYB = Number(document.getElementById("thingfood").getAttribute("y"))
  foodXB = Number(document.getElementById("thingfood").getAttribute("x"))

  if(positionX > foodXB - width && positionX < foodXB + width && positionY >foodYB - height && positionY < foodYB + height) {
    console.log("message")
    document.getElementById("thingfood").setAttribute("x", randomNumber(0, 300))
    foodEaten = foodEaten + 1
    document.getElementById("scoreboard").textContent = foodEaten
  }

  if(foodEaten == 6){
    console.log("End")
    document.getElementById("canvas").pauseAnimations()
    var timeStop = Date.now()
    var duration = Math.round((timeStop - timeStart)/1000)+" seconds"
    document.getElementById("totaltime").textContent = duration
    document.getElementById("totaltime").setAttribute("opacity", 1)
    document.getElementById("time").setAttribute("opacity", 1)
  }
})
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
