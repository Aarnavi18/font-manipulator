lwx=0;
rwx=0;
difference=0;
function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(550,150);
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw()
{
    background("grey");
    fill("pink");
   
   
document.getElementById("square_side").innerHTML="font size of the text= "+difference+"px";
textSize(difference);
text("Aarnavi",50,250);
}
function modelloaded()
{
    console.log("posenet is initialised");
}
function gotposes(results)
{
if(results.length>0){
    console.log(results);
    
     rwx=results[0].pose.rightWrist.x;
     lwx=results[0].pose.leftWrist.x;
    console.log("rightWristx="+rwx+" leftWristx="+lwx);
    difference=floor(lwx-rwx);
}
}