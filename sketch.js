let img;
var bgcolor = 0;
var check = false;
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasWrapper");
  background(0);

  let uploadElement = document.getElementById("imageUpload");
  uploadElement.addEventListener("change", handleImageUpload);
}

function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function draw() {
  if (check == true){
    background(bgcolor);
  }
  check = false;
  if (img != null) {
    push();
    translate(mouseX, mouseY);
    image(img, 0, 0, 50, 50);
    //image(img, 0, 0, width, height);
    pop();
  }
}

function saveImg() {
  saveCanvas(canvas);
}

function keyPressed(){
  if(key === 'r'){
    check = true;
    bgcolor = random(255);
    background(random(255));
  }
  if  (key === "s") {
    saveImg();
  }
}