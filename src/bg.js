const body = document.querySelector("body");
function handleImgLoad() {
  console.log("finished loading");
}
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //image.addEventListener("loadend", handleImgLoad);
}
function getRandom() {
  const number = Math.floor(Math.random() * 3);
  return number;
}
function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();
