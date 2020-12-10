const tirarDado = () => {
	let resultadoDado = Math.ceil(Math.random()*6);
	let posicionDado = document.getElementById('dado');
	return posicionDado.innerHTML = `<div class="dado" id="dado${resultadoDado}"></div><p>Ha salido un: ${resultadoDado}</p>`;
}

let boton = document.getElementById('boton');

boton.addEventListener('click', tirarDado);
