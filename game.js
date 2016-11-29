var namespace = "http://www.w3.org/2000/svg"

var positionX = 550;
var positionY = 250;
var foodY;
var foodX;
var width = 17;
var height = 12;
var message = "";

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
  }

})
function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}
