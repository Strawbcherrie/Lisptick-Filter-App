function preload(){

}

function setup(){
    canvas = createCanvas(400,500);
    canvas.center();
    // these are predifined functions of p5
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function download(){
    save('miwacl.png');
}
