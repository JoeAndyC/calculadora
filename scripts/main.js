const numeros = document.querySelectorAll('.numero');
const operaciones = document.querySelectorAll('.operacion');
const igual = document.querySelector('#igualdad');
const resultado = document.querySelector('#resultado');
const reStart = document.querySelector('#reStart');
const screenP = document.querySelector('#operacion');
const borrar = document.querySelector('#borrar');
let valActual;
let valAnterior;


numeros.forEach((numero) => {
  numero.addEventListener('click', () => {
    screenP.textContent += numero.textContent;
  });
});

reStart.addEventListener('click', () => {
  screenP.textContent = '';
  resultado.textContent = '';
});

operaciones.forEach((operacion) => {
  operacion.addEventListener('click', () => {
    screenP.textContent += ` ${operacion.textContent} `;
  });
});

borrar.addEventListener('click', () => {
  screenP.textContent = screenP.textContent.slice(0, -1);
});

 igualdad.addEventListener('click', () => {
  try {
    resultado.textContent = eval(screenP.textContent);
  } catch (error) {
    resultado.textContent = 'Error';
  };
 });
 

