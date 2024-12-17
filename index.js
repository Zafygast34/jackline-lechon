document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.galeria img'); // Selecciona todas las imágenes
    const overlay = document.querySelector('#overlay'); // El contenedor overlay
    const overlayImage = document.querySelector('#imagen-ampliada'); // Imagen dentro del overlay

    // Mostrar la imagen ampliada al hacer clic
    images.forEach(img => {
        img.addEventListener('click', function () {
            overlay.style.display = 'flex'; // Mostrar el overlay
            overlayImage.src = img.src; // Asignar la imagen seleccionada al overlay
        });
    });

    // Ocultar la imagen ampliada al hacer clic en cualquier parte del overlay
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) { // Solo se cierra si se hace clic en el área oscura (no en la imagen)
            overlay.style.display = 'none'; // Ocultar el overlay
            overlayImage.src = ''; // Limpiar la imagen ampliada
        }
    });
});
