let skinR;
let skinG;
let skinB;
let index = 0;
let i = 0;

let skinData;
let skinSheet = 'assets/CC_skinSheet.csv';
let skinArray = [];

let shirtR;
let shirtG;
let shirtB;
let shirtSliderR = 0;
let shirtSliderG = 0;
let shirtSliderB = 0;
let shirtStyle = 'long';

let leggosR;
let leggosG;
let leggosB;
let leggosSliderR = 0;
let leggosSliderG = 0;
let leggosSliderB = 0;

let hairR;
let hairG;
let hairB;
let hairSliderR = 0;
let hairSliderG = 0;
let hairSliderB = 0;
let hairStyle = 'bald';
  

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
  
  //loads skin values into code and array
    //won't let me use "row", so using "mow" as a placeholder
    for (var mow = 0; mow < skinData.getRowCount(); mow++) 
    {
      skinR = skinData.get(mow, 'R');
      skinG = skinData.get(mow, 'G');
      skinB = skinData.get(mow, 'B'); 
      skinArray[index] = new Skin(skinR, skinG, skinB);
      index++;
    }
  
  let buttonSkin = createButton("Skin Tone");
  buttonSkin.mousePressed(incrementArray);
  buttonSkin.size(150,80);
  buttonSkin.parent('skin-holder');
  let buttonShirt = createButton("Shirt Style");
  buttonShirt.mousePressed(switchShirt);
  buttonShirt.size(150,80);
  buttonShirt.parent('shirt-holder');
  let buttonHair = createButton("Hair Style");
  buttonHair.mousePressed(switchHair);
  buttonHair.size(150,80);
  buttonHair.parent('hair-holder');
  
  //shirt color slider info
  //R
  shirtSliderR = createSlider(0, 255);
  shirtSliderR.size(200);
  shirtSliderR.parent('shirt-holder');
  
  //G
  shirtSliderG = createSlider(0, 255);
  shirtSliderG.size(200);
  shirtSliderG.parent('shirt-holder');
  
  //B
  shirtSliderB = createSlider(0, 255);
  shirtSliderB.size(200);
  shirtSliderB.parent('shirt-holder');
  
  //leggos color slider info
  //R
  leggosSliderR = createSlider(0, 255);
  leggosSliderR.size(200);
  leggosSliderR.parent('pants-holder');
  
  //G
  leggosSliderG = createSlider(0, 255);
  leggosSliderG.size(200);
  leggosSliderG.parent('pants-holder');
  
  //B
  leggosSliderB = createSlider(0, 255);
  leggosSliderB.size(200);
  leggosSliderB.parent('pants-holder');
  
  //hair color slider info
  //R
  hairSliderR = createSlider(0, 255, 0, 5);
  hairSliderR.size(200);
  hairSliderR.parent('hair-holder');
  
  //G
  hairSliderG = createSlider(0, 255, 0, 5);
  hairSliderG.size(200);
  hairSliderG.parent('hair-holder');
  
  //B
  hairSliderB = createSlider(0, 255, 0, 5);
  hairSliderB.size(200);
  hairSliderB.parent('hair-holder');

}

function draw() 
{
  background(200);
  charaBase();
  
  
}

function charaBase()
{
  //leggo color slider info
  let leggosR = leggosSliderR.value();
  let leggosG = leggosSliderG.value();
  let leggosB = leggosSliderB.value();
  
  //back hand
  fill(skinR-20, skinG-20, skinB-20);
  ellipse(width/2.55, height/1.72, 15);
  ellipse(width/2.4, height/1.72, 15);
  ellipse(width/1.75, height/1.72, 15);
  
  //leggos
  fill(leggosR, leggosG, leggosB);
  rect(width/2.2, height/1.5, 35, 120);
  ellipse(width/2.35, height/1.35, 40, 30);
  rect(width/1.75, height/1.5, 35, 120);
  ellipse(width/1.85, height/1.35, 40, 30);
  
  //front hand
  fill(skinR, skinG, skinB);
  ellipse(width/1.58, height/1.72, 15);
  ellipse(width/1.66, height/1.72, 15);
  ellipse(width/1.75, height/1.72, 15);
  
  //shirt style
  switch (shirtStyle) 
  {
    case 'long':
      longShirt();
      break;
    case 'short':
      shortShirt();
      break;
    case 'hoodie':
      hoodieShirt();
      break;
  }
  
  //hair style
  switch (hairStyle) 
  {
    case 'bald':
      baldHair();
      break;
    case 'shStr':
      shortStrHair();
      break;
    case 'midStr':
      midStrHair();
      break;
    case 'longStr':
      longStrHair();
      break;
    case 'ponStr':
      ponyStrHair();
      break;
    case 'bunCur':
      bunCurHair();
      break;
    case 'shCur':
      shortCurHair();
      break;
    case 'midCur':
      midCurHair();
      break;
    case 'longCur':
      longCurHair();
      break;
    case 'ponyCur':
      ponyCurHair();
      break;
  }
  
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

function incrementArray() 
{
  skinArray[i];
  i = i + 1 % skinArray.length;
    if (i >= skinArray.length) 
    {
      i=0;
    }
  skinR = skinData.get(i, 'R');
  skinG = skinData.get(i, 'G');
  skinB = skinData.get(i, 'B');
}

class Skin 
  {
  constructor(skinR, skinG, skinB)
    {
    this.skinR = skinR;
    this.skinG = skinG;
    this.skinB = skinB;
    }  
  }
function switchShirt()
{
  switch (shirtStyle) 
    {
      case 'long':
        shirtStyle = 'short';
        break;
      case 'short':
        shirtStyle = 'hoodie';
        break;
      case 'hoodie':
        shirtStyle = 'long';
        break;
    }
}
function longShirt()
{
  //color slider info
  let shirtR = shirtSliderR.value();
  let shirtG = shirtSliderG.value();
  let shirtB = shirtSliderB.value();
  
  //body (shirt)
  fill(shirtR, shirtG, shirtB);
  ellipse(width/1.95, height/2.4, 115);
  rect(width/1.95, height/2, 115, 90);
  
  //shirt lines
  stroke(shirtR-100, shirtG-100, shirtB-100);
  strokeWeight(3);
  line(width/1.83, height/2.3, width/1.83, height/1.75);
  line(width/2.4, height/2.3, width/2.4, height/1.75);
  noStroke();
  
  //neck
  fill(skinR-20, skinG-20, skinB-20);
  rect(width/2, height/3, 40, 30);
  ellipse(width/2, height/2.85, 40);
}

function shortShirt()
{
  //color slider info
  let shirtR = shirtSliderR.value();
  let shirtG = shirtSliderG.value();
  let shirtB = shirtSliderB.value();
  
  //body (shirt)
  fill(shirtR, shirtG, shirtB);
  ellipse(width/1.95, height/2.4, 115);
  fill(skinR, skinG, skinB);
  rect(width/1.95, height/2, 110, 90);
  fill(skinR-20, skinG-20, skinB-20);
  rect(width/2.55, height/2, 15, 90);
  fill(shirtR, shirtG, shirtB);
  rect(width/2.07, height/2, 52, 90);
  rect(width/1.95, height/2.3, 115, 30);
  
  
  //shirt lines
  stroke(shirtR-100, shirtG-100, shirtB-100);
  strokeWeight(3);
  line(width/1.83, height/2.3, width/1.83, height/1.75);
  line(width/2.4, height/2.3, width/2.4, height/1.75);
  noStroke();
  
  //neck
  fill(skinR-20, skinG-20, skinB-20);
  rect(width/2, height/3, 40, 30);
  ellipse(width/2, height/2.85, 40);
}

function hoodieShirt()
{
  //color slider info
  let shirtR = shirtSliderR.value();
  let shirtG = shirtSliderG.value();
  let shirtB = shirtSliderB.value();
  
  //body (shirt)
  fill(shirtR, shirtG, shirtB);
  ellipse(width/1.95, height/2.4, 115);
  rect(width/1.95, height/2, 115, 90);
  fill(shirtR-20, shirtG-20, shirtB-20);
  rect(width/2.07, height/1.79, 52, 20);
  
  //shirt lines
  stroke(shirtR-100, shirtG-100, shirtB-100);
  strokeWeight(3);
  line(width/1.83, height/2.3, width/1.83, height/1.75);
  line(width/2.4, height/2.3, width/2.4, height/1.75);
  noStroke();
  
  //neck
  fill(skinR-20, skinG-20, skinB-20);
  rect(width/2, height/3, 40, 30);
  ellipse(width/2, height/2.85, 40);
  
  //hood
  push();
  
  fill(shirtR-15, shirtG-15, shirtB-15);
  rotate(QUARTER_PI / -2.0);
  ellipse(120, 285, 80, 30);
  fill(shirtR-25, shirtG-25, shirtB-25);
  rotate(QUARTER_PI / 1.0);
  ellipse(250, 130, 60, 30);
  pop();
  
  stroke(shirtR-100, shirtG-100, shirtB-100);
  strokeWeight(3);
  line(width/1.88, height/2.7, width/1.88, height/2.4);
  line(width/2.2, height/2.7, width/2.2, height/2.3);
}

function switchHair()
{
  switch (hairStyle) 
    {
      case 'bald':
        hairStyle = 'shStr';
        break;
      case 'shStr':
        hairStyle = 'midStr';
        break;
      case 'midStr':
        hairStyle = 'longStr';
        break;
      case 'longStr':
        hairStyle = 'ponStr';
        break;
      case 'ponStr':
        hairStyle = 'bunCur';
        break;
      case 'bunCur':
        hairStyle = 'shCur';
        break;
      case 'shCur':
        hairStyle = 'midCur';
        break;
      case 'midCur':
        hairStyle = 'longCur';
        break;
      case 'longCur':
        hairStyle = 'ponyCur';
        break;
      case 'ponyCur':
        hairStyle = 'bald';
        break;
    }
}

function baldHair()
{
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
}

function shortStrHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  fill(hairR, hairG, hairB);
  ellipse(width/1.8, height/5, 30, 40);
  ellipse(width/1.7, height/4.4, 20, 40);
  
  ellipse(width/2.2, height/5.2, 90, 50);
  ellipse(width/2.2, height/4.6, 60, 20);
}

function midStrHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  fill(hairR, hairG, hairB);
  ellipse(width/2.7, height/4, 30, 100);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //long part
  fill(hairR, hairG, hairB);
  ellipse(width/1.75, height/3.9, 30, 90);
  
  //bangs
  fill(hairR, hairG, hairB);
  ellipse(width/2.4, height/5, 65, 50);
  ellipse(width/2, height/5, 80, 80);
  
  //extra slin layer
  fill(skinR, skinG, skinB);
  ellipse(width/2.2, height/4.3, 60, 50);
}

function longStrHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //long part
  fill(hairR, hairG, hairB);
  ellipse(width/2.7, height/3.5, 40, 120);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //long part
  fill(hairR, hairG, hairB);
  ellipse(width/1.75, height/3.5, 40, 120);
  
  //bangs
  fill(hairR, hairG, hairB);
  ellipse(width/2.4, height/5, 65, 50);
  ellipse(width/2, height/5, 80, 80);
  
  //extra slin layer
  fill(skinR, skinG, skinB);
  ellipse(width/2.2, height/4.3, 60, 50);
}

function ponyStrHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //pony
  fill(hairR-25, hairG-25, hairB-25);
  ellipse(width/1.7, height/4, 50, 100);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  fill(hairR, hairG, hairB);
  ellipse(width/2.2, height/5.2, 90, 50);
  fill(hairR, hairG, hairB);
  ellipse(width/1.8, height/5, 30, 40);
  ellipse(width/1.7, height/4.4, 20, 40);
  
  ellipse(width/2.2, height/4.6, 60, 20);
}

function bunCurHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //bun
  fill(hairR-15, hairG-15, hairB-15);
  ellipse(width/1.8, height/5.5, 50);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  fill(hairR, hairG, hairB);
  ellipse(width/2.2, height/5.2, 90, 50);
  fill(hairR, hairG, hairB);
  ellipse(width/1.8, height/5, 30, 40);
  ellipse(width/1.7, height/4.4, 20, 40);
  
  ellipse(width/2.2, height/4.6, 60, 20);
}

function shortCurHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //floophy
  fill(hairR, hairG, hairB);
  ellipse(width/2.1, height/5.2, 60);
  ellipse(width/2.5, height/4.9, 40);
  ellipse(width/1.8, height/4.9, 50);
  ellipse(width/1.7, height/4.2, 30, 40);
}

function midCurHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //floof long
  fill(hairR, hairG, hairB);
  ellipse(width/2.6, height/4.0, 40, 50);
  ellipse(width/2.6, height/3.6, 30, 40);
  ellipse(width/2.6, height/3.3, 40, 50);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //floophy
  fill(hairR, hairG, hairB);
  ellipse(width/2.1, height/5.2, 60);
  ellipse(width/2.5, height/4.9, 40);
  ellipse(width/1.8, height/4.9, 50);
  ellipse(width/1.7, height/4.2, 30, 40);
  
  ellipse(width/1.7, height/4.0, 40, 50);
  ellipse(width/1.7, height/3.6, 30, 40);
  ellipse(width/1.7, height/3.3, 40, 50);
}

function longCurHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //floof long
  fill(hairR, hairG, hairB);
  ellipse(width/2.6, height/4.0, 40, 50);
  ellipse(width/2.6, height/3.6, 30, 40);
  ellipse(width/2.6, height/3.3, 40, 50);
  ellipse(width/2.6, height/2.9, 40, 50);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //floophy
  fill(hairR, hairG, hairB);
  ellipse(width/2.1, height/5.2, 60);
  ellipse(width/2.5, height/4.9, 40);
  ellipse(width/1.8, height/4.9, 50);
  ellipse(width/1.7, height/4.2, 30, 40);
  
  //floophy long
  ellipse(width/1.7, height/4.0, 40, 50);
  ellipse(width/1.7, height/3.6, 30, 40);
  ellipse(width/1.7, height/3.3, 40, 50);
  ellipse(width/1.7, height/2.9, 40, 50);
}

function ponyCurHair()
{
  let hairR = hairSliderR.value();
  let hairG = hairSliderG.value();
  let hairB = hairSliderB.value();
  
  //pony
  fill(hairR-25, hairG-25, hairB-25);
  ellipse(width/1.7, height/5.2, 40, 50);
  ellipse(width/1.7, height/5.0, 30, 40);
  ellipse(width/1.7, height/4.3, 40, 50);
  ellipse(width/1.7, height/3.5, 40, 50);
  
  //head
  noStroke();
  fill(skinR, skinG, skinB);
  ellipse(width/2.03, height/4, 85, 100);
  
  //floophy
  fill(hairR, hairG, hairB);
  ellipse(width/2.1, height/5.2, 60);
  ellipse(width/2.5, height/4.9, 40);
  ellipse(width/1.8, height/4.6, 50);
  ellipse(width/1.7, height/4.5, 30, 40);
}