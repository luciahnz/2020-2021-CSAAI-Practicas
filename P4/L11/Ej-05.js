console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al deslizador
const deslizadorRojo = document.getElementById('deslizadorRojo');
const deslizadorVerde = document.getElementById('deslizadorVerde')
const deslizadorAzul = document.getElementById('deslizadorAzul')

//-- Valor del deslizador 
const range_valueRojo = document.getElementById('range_valueRojo');
const range_valueVerde = document.getElementById('range_valueVerde');
const range_valueAzul = document.getElementById('range_valueAzul');

img.onload = function () {


  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

    ctx.drawImage(img, 0,0);

    
    deslizadorRojo.oninput = () => {
      range_valueRojo.innerHTML = deslizadorRojo.value;
      ctx.drawImage(img, 0,0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data
      umbralRojo = deslizadorRojo.value
      for (let i = 0; i < data.length; i+=4) {
        if (data[i] > umbralRojo)
          data[i] = umbralRojo;
      }
    
      ctx.putImageData(imgData, 0, 0);
    }
  
    deslizadorVerde.oninput = () => {
        range_valueVerde.innerHTML = deslizadorVerde.value;
      ctx.drawImage(img, 0,0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data
      umbralVerde = deslizadorVerde.value
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+1] > umbralVerde)
          data[i+1] = umbralVerde;
      }
      ctx.putImageData(imgData, 0, 0);
    }
  
    deslizadorAzul.oninput = () => {
        range_valueAzul.innerHTML = deslizadorAzul.value;
      ctx.drawImage(img, 0,0);
      let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let data = imgData.data
      umbralAzul = deslizadorAzul.value
      for (let i = 0; i < data.length; i+=4) {
        if (data[i+2] > umbralAzul)
          data[i+2] = umbralAzul;
      }
      ctx.putImageData(imgData, 0, 0);
    }


console.log("Fin...");