const numeros = document.querySelectorAll('.numero');
const operaciones = document.querySelectorAll('.operacion');
const reStart = document.querySelector('#reStart');
const screenP = document.querySelector('#resultado');
let valActual;
let valAnterior;


numeros.forEach((numero) => {
  numero.addEventListener('click', () => {
    screenP.textContent += numero.textContent;
  });
});

reStart.addEventListener('click', () => {
  screenP.textContent = '';
});

operaciones.forEach((operacion) => {
  operacion.addEventListener('click', () => {
    screenP.textContent += ` ${operacion.textContent} `;
  });
});

