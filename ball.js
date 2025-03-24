class Ball {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        this.vx = random([-5, 5]);
        this.vy = random(-3, 3);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.y <= 0 || this.y >= height) this.vy *= -1;
        if (this.x <= 0) { console.log("Jugador 2 gana un punto"); this.reset(); }
        if (this.x >= width) { console.log("Jugador 1 gana un punto"); this.reset(); }
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 20, 20);
    }
}

let ball;

function setup() {
    createCanvas(800, 400);
    ball = new Ball();
}

function draw() {
    ball.update();
    ball.show();
}
