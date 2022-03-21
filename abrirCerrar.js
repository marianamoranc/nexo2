let logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    let contenido = document.getElementById('contenido');
    contenido.classList.toggle('ocultar');
})