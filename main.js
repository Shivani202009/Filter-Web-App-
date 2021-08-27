nosex=""
nosey=""
function preload() {
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    
}

function setup() {
  canvas= createCanvas(400,400)
  canvas.center()
  video= createCapture(VIDEO)  
  video.size(400,400)
  video.hide()
  posenet= ml5.poseNet(video,modelloaded)
   posenet.on("pose",gotposes) 
}
function gotposes(results) {
   
  if (results.length>0) {
      console.log(results)
      console.log("nose x =" + results[0].pose.nose.x);
      console.log("nose y =" + results[0].pose.nose.y);
     nosex=results[0].pose.nose.x-20
     nosey=results[0].pose.nose.y+2
  }
}

function draw() {
    image(video,0,0,400,400)
    image(mustache,nosex,nosey,50,50)
}

function snapshot() {
  
}

function modelloaded() {
  console.log("your model has loaded")
}
