let skinData;
let skinSheet = 'assets/CC_skinSheet.csv';

function preload()
{
  skinData = loadTable(skinSheet, 'csv', 'header');
}


function setup() 
{
  let canvas = createCanvas(400, 600);
  canvas.parent('sketch-holder');
  rectMode(CENTER);
  ellipseMode(CENTER);
  
  let buttonSkin = createButton("Skin Tone");
  //buttonSkin.mousePressed(skinTones);
  
  
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(80);
}

function draw() 
{
  background(200);
  charaBase();
  
}

function charaBase()
{
  //skinTones(skinR, skinG, skinB);
  
  //back hand
  fill(220);
  ellipse(width/2.55, height/1.72, 15);
  ellipse(width/2.4, height/1.72, 15);
  ellipse(width/1.75, height/1.72, 15);
  
  //leggos
  fill(180);
  rect(width/2.2, height/1.5, 35, 120);
  ellipse(width/2.35, height/1.35, 40, 30);
  rect(width/1.75, height/1.5, 35, 120);
  ellipse(width/1.85, height/1.35, 40, 30);
  
  //front hand
  fill(240);
  ellipse(width/1.58, height/1.72, 15);
  ellipse(width/1.66, height/1.72, 15);
  ellipse(width/1.75, height/1.72, 15);
  
  //body
  fill(255);
  ellipse(width/1.95, height/2.4, 115);
  rect(width/1.95, height/2, 115, 90);
  
  //shirt lines
  stroke(160);
  strokeWeight(3);
  line(width/1.83, height/2.3, width/1.83, height/1.75);
  stroke(160);
  strokeWeight(3);
  line(width/2.4, height/2.3, width/2.4, height/1.75);
  noStroke()
  
  //neck
  fill(220);
  rect(width/2, height/3, 40, 30);
  ellipse(width/2, height/2.85, 40);
  
  //head
  noStroke();
  fill(240);
  ellipse(width/2.03, height/4, 85, 100);
  
  //L eyes
  fill(255);
  ellipse(width/1.9, height/4.1, 40);
  
  //L pupil
  fill(0);
  ellipse(width/1.94, height/4.15, 30);
  
  //R eye
  fill(255)
  ellipse(width/2.5, height/4.1, 40);
  
  //R pupil
  fill(0);
  ellipse(width/2.57, height/4.15, 30);
  
  //mouth
  stroke(0)
  strokeWeight(2);
  line(width/2.05, height/3.6, width/2.25, height/3.6);
  noStroke();
  
}

/*
function skinTones()
{
  //won't let me use "row", so using "mow" as a placeholder
    for (var mow = 0; mow < skinData.getRowCount(); mow++) 
    {
  
    let title = skinData.get(mow, 'Name');
    let skinR = skinData.get(mow, 'R');
    let skinG = skinData.get(mow, 'G');
    let skinB = skinData.get(mow, 'B'); 
    }
}
**/