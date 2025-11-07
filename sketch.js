function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  drawSky();

  drawWater();
}

function drawSky() {
  // Orange and yellow wavy bands
  for (let i = 0; i < height * 0.4; i += 15) {
    let wave = sin(i * 0.05) * 50;
    let wave2 = cos(i * 0.08) * 30;
    // Orange to yellow gradient
    let r = 255 - i * 0.2 + sin(i * 0.1) * 20;
    let g = 150 + i * 0.3 + cos(i * 0.15) * 15;
    fill(r, g, 0, 180);
    noStroke();
    // Draw wavy bands using rectangles
    for (let x = 0; x < width; x += 5) {
      let y = i + sin(x * 0.01 + i * 0.05) * 30 + sin(x * 0.02 + i * 0.1) * 20 + wave + wave2;
      rect(x, y, 5, 20);
    }
  }
}


function drawWater() {
  // Dark swirling blues and purples
  for (let i = height * 0.4; i < height * 0.7; i += 12) {
    let wave = sin(i * 0.1) * 40;
    let wave2 = cos(i * 0.15) * 30;
    // More color variation
    let r = 20 + sin(i * 0.2) * 10;
    let g = 30 + i * 0.3 + cos(i * 0.25) * 15;
    let b = 60 + i * 0.2 + sin(i * 0.3) * 20;
    fill(r, g, b, 160);
    noStroke();
    // Draw wavy water using rectangles
    for (let x = 0; x < width; x += 3) {
      let y = i + sin(x * 0.02 + i * 0.1) * 25 + sin(x * 0.03 + i * 0.2) * 15 + cos(x * 0.015 + i * 0.12) * 10 + wave + wave2;
      rect(x, y, 3, height - y);
    }
  }
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}