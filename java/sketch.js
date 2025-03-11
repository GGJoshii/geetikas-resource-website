var allthekitties = [];
var currentkitty = 1; // changed the type of cat images to be galaxy cats
var kittyposition = {x: 250, y: 120, w:320, h:300}; // changed the sizes of images
let r, g, b; // added colors for the background

function preload(){
    // let url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    let url = 'https://api.thecatapi.com/v1/images/search?limit=3&category_ids=2'; // changed the images 
    loadJSON(url, successCallback);
}

function successCallback(data){
    console.log(data);
    for(kitty of data){
        var kitty = createImg(kitty.url);
        kitty.hide();
        allthekitties.push(kitty);
    }
}

function setup(){
    createCanvas(1000, 542); // changed canvas size
    fill(r, g, b, 200); // added rgb colors
}

function draw(){
    background(r, g, b); // changed the background color to be random
    text(allthekitties.length, 100, 100); // changed the position of the number '10'
    image( allthekitties[currentkitty], kittyposition.x, kittyposition.y, kittyposition.w, kittyposition.h);
}

function mouseReleased(){ // added color change in the background when the mouse is released
    let background = dist(mouseX, mouseY, 300, 100);
  if (background < 1340) {
    // colors are random values each time mouse is released
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function mousePressed(){
    if( mouseX > kittyposition.x && mouseX < kittyposition.x+kittyposition.h
        && mouseY > kittyposition.y && mouseY < kittyposition.y+kittyposition.h){
        currentkitty++;
        currentkitty = currentkitty % allthekitties.length;
        kittyposition.x = random(width-kittyposition.w);
        kittyposition.y = random(height-kittyposition.h);
    }
}