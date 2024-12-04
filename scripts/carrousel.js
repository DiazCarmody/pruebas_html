let indice = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.imagenes img');
    indice = (indice + direccion + imagenes.length) % imagenes.length;
    const desplazamiento = -indice * 300; // 300 es el ancho de la imagen
    document.querySelector('.imagenes').style.transform = `translateX(${desplazamiento}px)`;
}
