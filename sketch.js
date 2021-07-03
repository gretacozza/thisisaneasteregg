
let myFont;

function preload(){
  myFont = loadFont('assets/fonts/SuisseIntl-Regular.otf');// put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
}

function draw() {
  translate(width/2, height/2)
  textAlign(CENTER);
  textSize(height/30);
  textFont(myFont);
  text('no, questi non funzionano.', 0,0);
}
