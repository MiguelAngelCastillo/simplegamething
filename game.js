var namespace = "http://www.w3.org/2000/svg"

var position = 550;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 37){
    position -=10;
    document.getElementById("scaryskeleton").setAttribute("x", position)
  }
  else if (e.keyCode == 39) {
    position +=10;
    document.getElementById("scaryskeleton").setAttribute("x", position)
  }
})

var position = 250;
document.addEventListener("keydown", function(e) {
  if(e.keyCode == 40){
    position +=10;
    document.getElementById("scaryskeleton").setAttribute("y", position)
  }
  else if (e.keyCode == 38) {
    position -=10;
    document.getElementById("scaryskeleton").setAttribute("y", position)
  }
})
