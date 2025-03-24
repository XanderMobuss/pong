let pelota;
let velocidadX, velocidadY;
let jugador1, jugador2;
let puntaje1 = 0, puntaje2 = 0;
let velocidadPaleta = 6;
let puntajeMaximo = 10;

function setup() {
  createCanvas(800, 400);
  pelota = createVector(width / 2, height / 2);
  velocidadX = random([-4, 4]);
  velocidadY = random([-3, 3]);
  jugador1 = height / 2 - 40;
  jugador2 = height / 2 - 40;
}

function draw() {
  background(0);
  
  // Dibujar pelota
  fill(255);
  ellipse(pelota.x, pelota.y, 15, 15);
  
  // Dibujar paletas
  rect(20, jugador1, 10, 80);
  rect(width - 30, jugador2, 10, 80);
  
  // Movimiento de la pelota
  pelota.x += velocidadX;
  pelota.y += velocidadY;
  
  // Rebote en los bordes superior e inferior
  if (pelota.y <= 0 || pelota.y >= height) {
    velocidadY *= -1;
  }
  
  // Movimiento de los jugadores
  if (keyIsDown(87) && jugador1 > 0) { // W
    jugador1 -= velocidadPaleta;
  }
  if (keyIsDown(83) && jugador1 < height - 80) { // S
    jugador1 += velocidadPaleta;
  }
  if (keyIsDown(UP_ARROW) && jugador2 > 0) {
    jugador2 -= velocidadPaleta;
  }
  if (keyIsDown(DOWN_ARROW) && jugador2 < height - 80) {
    jugador2 += velocidadPaleta;
  }
  
  // Colisión con paletas
  if (pelota.x <= 30 && pelota.y > jugador1 && pelota.y < jugador1 + 80) {
    velocidadX *= -1.1;
  }
  if (pelota.x >= width - 40 && pelota.y > jugador2 && pelota.y < jugador2 + 80) {
    velocidadX *= -1.1;
  }
  
  // Verificar si un jugador anota
  if (pelota.x < 0) {
    puntaje2++;
    reiniciarPelota();
  }
  if (pelota.x > width) {
    puntaje1++;
    reiniciarPelota();
  }
  
  // Mostrar puntajes
  textSize(32);
  textAlign(CENTER, TOP);
  text(puntaje1, width / 4, 20);
  text(puntaje2, (3 * width) / 4, 20);
  
  // Verificar si alguien gana
  if (puntaje1 >= puntajeMaximo || puntaje2 >= puntajeMaximo) {
    textSize(50);
    text("¡Juego Terminado!", width / 2, height / 2);
    noLoop();
  }
}

function reiniciarPelota() {
  pelota.set(width / 2, height / 2);
  velocidadX = random([-4, 4]);
  velocidadY = random([-3, 3]);
}
