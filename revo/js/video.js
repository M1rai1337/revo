const player = document.querySelector('.header__video-play-btn');
const video = document.querySelector('.video');

player.addEventListener('click', () => {
    video.classList.toggle('active');
});