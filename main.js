
function preload()
{
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
}
function takeSnapshot()
{
 save('photo_booth_Image.png');
}
function modelLoaded()
{
    console.log('poseNet is initialized');
}
function gotPoses(results)
{

}