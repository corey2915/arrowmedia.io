
function setup(){
  createCanvas(1000,1000);
  console.log(mouseX, mouseY);
}

function draw(){
  // draw what is in side the funcation drawTitle
  drawTitle();
  // draw what is in side the funtion drawBoutton and drawHowtoplaybotton
  drawBoutton();
}

function drawTitle(){
  // draw the sentence welcome to...
  var w = 'welcome to...';
  fill(0);
  textSize(30);
  text(w,50,50);
  // draw the sentence arrow media
  var s = 'arrow media';
  fill(0);
  textSize(30);
  text(s, 550,100);
}

function drawBoutton(){

  // the top left hand conter
  fill(100);
  rect(250,500,200,50);
  // the bottom left hand conter
  fill(100);
  rect(250,650,200,50);
  // the top right hand conter
  fill(100);
  rect(800,500,200,50);
  // the bottom right hand conter
  fill(100);
  rect(800,650,200,50);
  // it is draw out how to play botton
  drawHowtoplaybotton()
}

function drawHowtoplaybotton() {
  var s = 'How to play';
  fill(0);
  textSize(30);
  text(s, 250,540);
}
