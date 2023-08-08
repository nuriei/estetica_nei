var numero = 0;
function anterior() {

var imagenes = ["img/galeria1.jpg","img/galeria2.jpg"];

numero--; 
if (numero < 0) {
numero = 5;
}

document.getElementById("imagen_galeria").src=imagenes[numero];
}

function siguiente() {
var imagenes = ['galeria1.jpg','galeria2.jpg','galeria3.jpg','galeria4.jpg','galeria5.jpg','galeria6.jpg'];
numero++;
if (numero > 5) {
numero = 0;
}

document.getElementById("imagen_galeria").src=imagenes[numero];
}