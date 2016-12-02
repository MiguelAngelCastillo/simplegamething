var namespace = "http://www.w3.org/2000/svg"

var foodEaten = 0;

var positionX = 550;
var positionY = 250;
var foodY;
var foodX;
var width = 7;
var height = 10;
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

})
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

if(foodEaten == 5){
  console.log("End")
  document.getElementById("canvas").pauseAnimation()
  var timeStop = Date.now()
  var duration = timeStop - timeStart
  document.getElementById("totaltime").textContent = duration
}
