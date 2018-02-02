// let baileys;
// let type;
// let square;
let leea;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function preload() {
  // baileys = loadModel('assets/baileys.obj');
  // type = loadModel('assets/type.obj');
  // square = loadModel("assets/square.obj");
  leea = loadModel("assets/leesmall.obj");
}

function draw() {
  background(0, 51, 204);
  // noFill();
  // rotateX(15);
  // rotateY(60);
  // stroke(255);
  // strokeWeight(0.5);
  // torus(90, 30);
  //
  // translate(240, 50, 0);
  // push();
  // stroke(255, 51, 255);
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // box(70, 70, 70);
  // pop();
  //
  // translate(240, 100, 0);
  // push();
  // stroke(0, 255, 255);
  // rotateZ(mouseX * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // sphere(70);
  // pop();
  //
  // translate(100, -900, 0);
  // stroke(255, 255, 0);
  // strokeWeight(1);
  // push();
  // scale(0.9);
  // model(baileys);
  // pop();
  //
  // translate(-800, 500, 0);
  // stroke(255, 255, 0);
  // strokeWeight(0.5);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // push();
  // scale(0.9);
  // model(type);
  // pop();
  //
  // translate(100, -900, 0);
  // fill(255);
  // stroke(255, 255, 0);
  // strokeWeight(1);
  // push();
  // scale(0.9);
  // model(square);
  // pop();

  // translate(-800, 500, 0);


  // ambientLight(0, 255, 0);
  // directionalLight(255, 255, 0);
  // stroke(255, 255, 0);
  // ambientLight(0, 0, 255);
  // directionalLight(255, 0, 0, v);
  //pointLight(255, 0, 0, 200, 0, 0);  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  stroke(255, 255, 0);
  strokeWeight(0.3);
  ambientMaterial(255);
  strokeWeight(0.2);
  noFill();
  // push();
  scale(0.8);
  model(leea);
  // pop();

}
