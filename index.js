// Seleccionamos todas las imágenes y el contenedor overlay
const imagenes = document.querySelectorAll('.imagen-click');
const overlay = document.getElementById('overlay');
const imagenAmpliada = document.getElementById('imagen-ampliada');

// Función para mostrar la imagen ampliada
imagenes.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        imagenAmpliada.src = imagen.src; // Mostrar la imagen clickeada
        overlay.style.display = 'flex'; // Mostrar el overlay
    });
});

// Función para cerrar la imagen al hacer clic fuera de ella
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    imagenAmpliada.src = ''; // Limpiar la imagen
});
