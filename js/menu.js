const menu = document.querySelector('.menu');
const menunav = document.querySelector('.menu-navegacion');


menu.addEventListener('click', () => {
    menunav.classList.toggle('spread');
})

window.addEventListener("click", (e) => {
    if(menunav.classList.contains("spread") && e.target != menu && e.target != menunav){
        menunav.classList.remove("spread");
    }
    }
)