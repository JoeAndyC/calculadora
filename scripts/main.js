const numeros = document.querySelectorAll('.numero');
const screenP = document.querySelector('#resultado');

numeros.forEach((numero) => {
  numero.addEventListener('click', () => {
    screenP.textContent += numero.innerText;
  });
});