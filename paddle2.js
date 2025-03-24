class Paddle2 {
    constructor() {
        this.w = 10;
        this.h = 80;
        this.x = width - 30;
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

let rightPaddle;

function setup() {
    createCanvas(800, 400);
    rightPaddle = new Paddle2();
}

function draw() {
    rightPaddle.update();
    rightPaddle.show();
}

function keyPressed() {
    if (keyCode === UP_ARROW) rightPaddle.move(-1);
    if (keyCode === DOWN_ARROW) rightPaddle.move(1);
}

function keyReleased() {
    if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) rightPaddle.move(0);
}
