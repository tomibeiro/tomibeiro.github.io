const imagenes= document.querySelectorAll('.img-galeria');
const imgLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light'); 
const menu1 = document.querySelector('.menu');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerimagen(imagen.getAttribute('src'));
        
    })

})

contenedorLight.addEventListener('click', (e) => {
    if (contenedorLight.classList.contains('show') && e.target != imgLight) {
        contenedorLight.classList.toggle('show');
        imgLight.classList.toggle('show-image');
        menu.style.display = 'block';
    }
})

const aparecerimagen = (imagen) => {
    imgLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imgLight.classList.toggle('show-image');
    menu.style.display = 'none';
}