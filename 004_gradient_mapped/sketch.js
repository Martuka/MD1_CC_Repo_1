var c1, c2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    c1 = color(255, 255, 0);
    c2 = color(0, 0, 255);
    rand = random(0, 1)
    if (rand < 0.5) {
        background(c1)
    } else {
        background(c2)
    }
}

function draw() {
    angleMode(DEGREES);
    var a = atan2(mouseY - windowHeight / 2, mouseX - windowWidth / 2);
    translate(windowWidth / 2, windowHeight / 2);
    push();
    rotate(a);
    setGradient(0 - windowWidth, 0 - windowHeight, 2 * windowWidth, 2 * windowHeight, c2, c1);
    pop();
    push();
    rotate(-a);
    setGradient(0 - windowHeight / 3, 0 - windowHeight / 3, windowHeight / 1.5, windowHeight / 1.5, c2, c1);
    pop();
}

// This function draws a lineal gradient in a rectangle
function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (var i = x; i <= x + w; i++) {
        var inter = map(1.5 * i, x, (x + w) / 1.5, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
}
