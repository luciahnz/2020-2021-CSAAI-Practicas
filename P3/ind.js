console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Variables para la bola
let bola_x = 300;
let bola_y = 300;
let bola_vx = 0;
let bola_vy = 0;

//-- Variables para la raqueta 
let raq_x = 300;
let raq_y = 600;
let raq_v = 0;  //-- Velocidad

//-- Pintar todos los objetos en el canvas
function draw() {

    //-- Constantes de los ladrillos
const LADRILLO = {
  F: 6,  // Filas
  C: 10,  // Columnas
  w: 50,
  h: 35,
  padding: 10,
  visible: true,
  
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
  ladrillos[i] = [];
  for (let j = 0; j < LADRILLO.C; j++) {
    ladrillos[i][j] = {
        
        x: (LADRILLO.w + LADRILLO.padding) * j + 15,
        y: (LADRILLO.h + LADRILLO.padding) * i +15,
        w: LADRILLO.w,
        h: LADRILLO.h,
        padding: LADRILLO.padding,
        visible: LADRILLO.visible
        
      };
      if (bola_x >= ladrillos[i][j].x && bola_y >= ladrillos[i][j].y 
        && ladrillos[i][j].visible){
            // ladrillos[i][j].visible = false; //hace que el bloque desaparezzca cuando lo toca la bola
            bola_vy = bola_vy * -1;
      }
  }
}

//--ladrillos[0][0].visible = false;


//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
  for (let j = 0; j < LADRILLO.C; j++) {

    //-- Si el ladrillo es visible se pinta
    if (ladrillos[i][j].visible) {
      ctx.beginPath();
      ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.w, LADRILLO.h);
      ctx.fillStyle = 'pink'
      ctx.fill();
      ctx.stroke();
    }
  }
}

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(bola_x, bola_y, 12, 12);
  ctx.fill();

  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta 
  ctx.beginPath();
    ctx.fillStyle='black';
    ctx.rect(raq_x, raq_y, 80, 10);
    ctx.fill();

  ctx.beginPath();



//------ PUNTOS
ctx.font = "80px Arial";
ctx.fillStyle = "black";
ctx.fillText("0", 275, 80);

}
//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raq_x += raq_v;
  

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola_x < 0 || bola_x >= (canvas.width - 20) ) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_vx = -bola_vx;
  }
  //-- Condición de rebote en extremos horizontales del canvas
  if (bola_y <= 0 || bola_y > 680) {
    bola_vy = -bola_vy;
  }

  //-- Comprobar si hay colisión con la raqueta 
  if (bola_y >= raq_y && bola_y <=(raq_y+50) &&
      bola_x >= raq_x && bola_x <=(raq_x+50)) {
    bola_vy = bola_vy * -1;
  }

  

 

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
    //-- Actualizar la posición
    bola_x = bola_x + bola_vx;
    bola_y = bola_y + bola_vy;
  
    //-- 2) Borrar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},30);

//-- Obtener el boton de saque
const sacar = document.getElementById("sacar");

//-- Botón de saque:
//-- Dar a la bola una velocidad inicial
//-- También restablecemos la posicion inicial
sacar.onclick = () => {
  bola_x = 300;
  bola_y = 300;
  bola_vx = 4;
  bola_vy = 4;
  console.log("Saque!");
}

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    case "d":
      raq_v = 6;
      break;
      
    case "a":
      raq_v = -6;
      break;
    case " ":
      bola_x = 300;
      bola_y = 300;
      bola_vx = 4;
      bola_vy = 4;
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d"){
    //-- Quitar velocidad de la raqueta
    raq_v = 0;
  }

}