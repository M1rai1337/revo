const burger = document.querySelector('.navbar__burger');
const menu = document.querySelector('.navbar__menu');
const body = document.body;


if (burger && menu){
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });
}
