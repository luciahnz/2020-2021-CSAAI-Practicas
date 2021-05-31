console.log("Ejecutando JS...");
console.log(funciones)
console.log(digitos)


display = document.getElementById("display")
igual = document.getElementById("igual")
del = document.getElementById("del")
clear = document.getElementById("clear")


//-- Operación para detectar numero

let digitos=document.getElementsByClassName("digito")



//-- Operación de sumar, restar, multiplicar y dividir
let funciones=document.getElementsByClassName("funcion")


const estado = {
  ini: 0,
  dig1: 1,
  signo: 2,
  dig2_ini: 3,
  dig2: 4,
}

let estados = estado.ini;

//-- Operación operar con numero
function numerico(num)
{
  if(display.innerHTML == "0"){
    display.innerHTML = num.value;
  }else{
  display.innerHTML += num.value;
  }
}



for(i = 0; i < digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    digit(ev.target);
  }
}

for(i = 0; i < funciones.length; i++){
  funciones[i].onclick = (ev) =>{
    funcion(ev.target);
  }
}




igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}


//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estados = estado.ini;
}

//-- Para poder borrar
del.onclick = () => {
    if(display.innerHTML == "0"){
      display.innerHTML = "0";
      estados = estado.ini;
    }else{
      display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
    }
  }


function digit(dig){
    if (estados == estado.ini) {
      display.innerHTML = dig.value;
      estados = estado.dig1;
    } else if (estados == estado.dig1){
      display.innerHTML += dig.value;
    } else if (estados == estado.signo){
      display.innerHTML += dig.value;
      estados = estado.dig2_ini;
    } else if (estados == estado.dig2_ini){
      display.innerHTML += dig.value;
      estados = estado.dig2;
    } else if (estados == estado.dig2){
      display.innerHTML += dig.value;
    }
} 

function funcion (sig)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estados != estado.signo){
    display.innerHTML += sig.value;
    estados = estado.signo;
  }
}