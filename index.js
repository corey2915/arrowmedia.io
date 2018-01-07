
function setup(){
  createCanvas(1400,750);
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
  var w = 'Welcome To...';
  fill(0);
  textSize(50);
  text(w,50,50);
  // draw the sentence arrow media
  var s = 'Arrow Media';
  fill(0);
  textSize(100);
  text(s, 425,250);
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
  rect(900,500,200,50);
  // the bottom right hand conter
  fill(100);
  rect(900,650,200,50);
  // it is draw out how to play botton
  drawHowtoplaybotton()
  drawSettingbotton()
  drawPlaybotton()
  drawMadeby()

}

function drawHowtoplaybotton() {
  var s = '  How to play';
  fill(0);
  textSize(30);
  text(s, 250,540);

}

function drawSettingbotton() {
  var s = '     Settings';
  fill(0);
  textSize(30);
  text(s, 250,690);

}

function drawPlaybotton() {
  var s = '     Play';
  fill(0);
  textSize(30);
  text(s, 940,540);

}

function drawMadeby(){
  var s = '  Made By';
  fill(0);
  textSize(30);
  text(s, 940,690);


}
