

var nums = ["Happy", "Birthday", "Grandpa", "The Big", "80"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(15);
  colorMode(HSB); // Move this here
}

function draw() {
  appearance();
  wordPlacement();
}

function appearance() {
  textSize(random(0, 100)); // Only one textSize call
  fill(random(5, 310), random(50, 100), random(50, 150));
}

function wordPlacement() {
  for (var i = 0; i < nums.length; i++) {
    text(nums[i], mouseX, 100 + i * 100); // Removed width/height
  }
  for (let i = 0; i < nums.length; i++){
    text(nums[4], random(width), random(height)); // Random placement
    //how was this made?
  //   // the text(nums[i], random(width), random(height)); line places each word at a random position within the canvas dimensions.
  //   // The random(width) and random(height) functions generate random x and y coordinates, respectively
  //   //why did we put it in a for loop?
  //   // The for loop iterates through each word in the nums array, allowing each word to
  //   // be displayed at a different random position on the canvas.
  

  
  }

}

  

