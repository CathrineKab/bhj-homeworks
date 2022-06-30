const clickerElement = document.getElementById("clicker__counter")
const image = document.getElementById("cookie");

let bigSize = "300";
let smallSize = "200";

function changeSize() {

  if (image.width == bigSize) {
    image.width = smallSize;
  } else image.width = bigSize;

  clickerElement.textContent++;
}

image.onclick = changeSize; 