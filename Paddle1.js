class Paddle1 {
    constructor() {
        this.w = 10;
        this.h = 80;
        this.x = 20;
        this.y = height / 2 - this.h / 2;
        this.speed = 5;
        this.direction = 0;
    }

    move(dir) {
        this.direction = dir;
    }

    update() {
        this.y += this.speed * this.direction;
        this.y = constrain(this.y, 0, height - this.h);
    }

    show() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }
}

let leftPaddle;

function setup() {
    createCanvas(800, 400);
    leftPaddle = new Paddle1();
}

function draw() {
    background(0);
    leftPaddle.update();
    leftPaddle.show();
}

function keyPressed() {
    if (key === 'W' || key === 'w') leftPaddle.move(-1);
    if (key === 'S' || key === 's') leftPaddle.move(1);
}

function keyReleased() {
    if (key === 'W' ||  key === 'w' || key === 'S' || key === 's') leftPaddle.move(0);
}