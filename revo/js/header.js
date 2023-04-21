const navbar = document.querySelector('.header__navbar');

window.addEventListener('scroll', () => {
    let scrollTop = this.scrollY;
    const isAnimatig = navbar.classList[3] === "animating";
    const isNotAnimated = navbar.classList[4] === "not-animated";
    const isAnimated = navbar.classList[4] === "animated";

    if (scrollTop > 770) {
        navbar.classList.add('active');
        navbar.classList.add('not-animated');
    } else{
        navbar.classList.remove('active');
        navbar.classList.remove('not-animated');
        navbar.classList.remove('animating');  
        navbar.classList.remove('animated');
    }
    
    if (scrollTop > 850 ){ 
        navbar.classList.remove('not-animated');
        navbar.classList.add('animating');
    }
    
    if (isAnimatig && isNotAnimated){
        navbar.classList.add('animated');
    } else if (isAnimatig && isAnimated){
        navbar.classList.remove('animated');
    }
});
