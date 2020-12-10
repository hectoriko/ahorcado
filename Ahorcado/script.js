String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
}

function jugar() {
  let i = 0;
  
  // Palabra pre-definida
  /* var palabra = 'c o c h e';
  var huecos = '_ _ _ _ _'; */

  // Palabra aleatoria
  var arrayPalabras = ['abrelatas','disposición','parlante', 'aire','mesa','PC', 'libros','escuela','pelusa','esfera','periferico', 'animal','esquina','perro', 'casco','Eugenia','piscinas', 'pasto','cuaderno','planta','polonia','atomo','francia','posavasos','galleta','programa','puerta'];
  var palabra = arrayPalabras[Math.floor(Math.random()* arrayPalabras.length)];

  var huecos = '';
  for (let i = 0; i < palabra.length; i++) {
    huecos += '_'
  };

  /* console.log(palabra, huecos); */

  do {
    var intentos = Math.round(palabra.length/2) + 3;
    var intentosRestantes = intentos - i;
    var letra = prompt(`Adivina la palabra: \n ${huecos} \n (Te quedan ${intentosRestantes} intentos)`);
    console.log(`La letra introducida es: ${letra} `);
    
    for (var j = 0; j <= palabra.length; j++) {
      if (letra == palabra.charAt(j)) {
        console.log(`La letra ${palabra.charAt(j)}, está en la posición ${palabra.indexOf(letra)}`,);
        // console.log(huecos, j, palabra.charAt(j), huecos.charAt(j));
        huecos = huecos.replaceAt(j, palabra.charAt(j));
        if (palabra == huecos) {
          return alert('Has ganado!, la palabra oculta era: '+ palabra);
        }
      } 
    }
    i++;
  } while (i < intentos);
};

let boton = document.getElementById('boton');
boton.addEventListener('click', jugar);