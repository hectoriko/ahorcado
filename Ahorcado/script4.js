String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

// Definir zonas a usar en el HTML
var mainContainer = document.getElementById('mainContainer');
var areaDibujo = document.getElementById('areaDibujo');
var areaMensaje = document.getElementById('areaMensaje');
var areaHuecos = document.getElementById('areaHuecos');
var areaFallosRestantes = document.getElementById('areaFallosRestantes');

// Palabra pre-definida
var palabra = 'c a r';
var huecos = '_ _ _'; 

// Definimos valores iniciales
var fallosRestantes = 5;
var contador = 0;

// Dibujamos elementos inciales
areaHuecos.innerHTML = huecos;
areaDibujo.innerHTML = '<img src="img/ahorcado0.png"></img>';
areaFallosRestantes.innerHTML = `Te quedan 5 fallos.`


function jugar(tecla) {
  while (fallosRestantes >= 0) {
    var letra = tecla;
    console.log(letra);
    console.log(`La letra introducida es: ${letra.key}`);
    for (var j = 0; j <= palabra.length; j++) {
      if (palabra.includes(letra.key)) {
        if (palabra.charAt(j) == letra.key) {
          huecos = huecos.replaceAt(j, palabra.charAt(j));
          areaHuecos.innerHTML = huecos;
          if (palabra == huecos) {
             mainContainer.innerHTML = `<h2>FELICIDADES <br> 
                                      Has ganado! <br> 
                                      La palabra era: <span>${palabra}</span></h2>
                                      <button><a href="index4.html">Volver a jugar<a></button>`;
          }
          return fallosRestantes += 0;
        }
      }  else {
        /* console.log('fallo', fallosRestantes, 'contador: ' + contador); */
        fallosRestantes--;
        contador++;
        areaDibujo.innerHTML = `<img src="img/ahorcado${contador}.png">`;
        /* areaMensaje.innerHTML = `<p>Esa letra no aparece en la palabra. Prueba de nuevo.</p>`; */
        areaFallosRestantes.innerHTML =`<p>Te quedan ${fallosRestantes} fallos.</p>`;
        if (fallosRestantes == 0) {
          mainContainer.innerHTML = `<img src="img/ahorcado${contador}.png">
                                      <h3>Has perdido! <br> 
                                      La palabra era: <span>${palabra}</span></h3>
                                     <button><a href="index4.html">Volver a jugar<a></button>`;
        }
        return fallosRestantes; 
      }
    }  
  } ;
};

window.addEventListener('keyup', (tecla) => {
  console.log(tecla.key);
  jugar(tecla)
});


// Palabra aleatoria
/* var arrayPalabras = ['abrelatas','disposicion','altavoz','aire','mesa','libros','escuela','pelusa','esfera','periferico','animal','esquina','perro', 'casco','piscina','pasto','cuaderno','planta','atomo','francia','posavasos','galleta','programa','puerta'];
var palabra = arrayPalabras[Math.floor(Math.random()* arrayPalabras.length)];

var huecos = '';
for (let i = 0; i < palabra.length; i++) {
  huecos += '_';
}; */