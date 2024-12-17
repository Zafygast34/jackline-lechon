<script>
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.galeria img'); // Todas las imágenes
    const overlay = document.querySelector('.overlay'); // El contenedor del overlay
    const overlayImage = document.querySelector('.overlay img'); // La imagen dentro del overlay

    // Mostrar la imagen en grande cuando se hace clic
    images.forEach(img => {
        img.addEventListener('click', function () {
            overlay.style.display = 'flex'; // Mostrar el overlay
            overlayImage.src = img.src; // Asignar la imagen seleccionada
        });
    });

    // Cerrar la imagen ampliada cuando se hace clic en el overlay
    overlay.addEventListener('click', function () {
        overlay.style.display = 'none'; // Ocultar el overlay
    });
});
</script>
