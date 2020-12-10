const tirarDado = () => {
  let resultadoDado1 = Math.ceil(Math.random()*6);
  let resultadoDado2 = Math.ceil(Math.random()*6);
  let puntuacionTotal = resultadoDado1 + resultadoDado2;
  let posicionDado = document.getElementById('posicionDado');
  
  let imprimir = `<div class="dado" id="dado${resultadoDado1}"></div>
                  <div class="dado" id="dado${resultadoDado2}"></div>
                  <p>Ha salido un: ${resultadoDado1} y un ${resultadoDado2}.</p>
                  <h3>El total es: ${puntuacionTotal} puntos</h3>`;
  let stringGanar = `<h2 class="ganar">HAS GANADO!</h2>`;
  let stringPerder = `<h2 class="perder">HAS PERDIDO!</h2>`;

  if (puntuacionTotal >= 8) {
    return posicionDado.innerHTML = `${imprimir}${stringGanar}` ;
  } else {
    return posicionDado.innerHTML = `${imprimir}${stringPerder}` ;
  }  
}

let boton = document.getElementById('boton');

boton.addEventListener('click', tirarDado);
