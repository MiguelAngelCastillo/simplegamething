var namespace = "http://www.w3.org/2000/svg"

var positionX = 550;

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    positionX -=10;
    document.getElementById("scaryskeleton").setAttribute("x", positionX)
  }
  else if (e.keyCode == 39) {
    positionX +=10;
    document.getElementById("scaryskeleton").setAttribute("x", positionX)
  }
})

var positionY = 250;

document.addEventListener("keydown", function(e) {
  if(e.keyCode == 40){
    positionY +=10;
    document.getElementById("scaryskeleton").setAttribute("y", positionY)
  }
  else if (e.keyCode == 38) {
    positionY -=10;
    document.getElementById("scaryskeleton").setAttribute("y", positionY)
  }
})
