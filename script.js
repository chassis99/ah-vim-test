// script.js

document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item a');
    const videoPlayer = document.querySelector('.video-player iframe');

    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const videoUrl = item.getAttribute('href');
            videoPlayer.setAttribute('src', videoUrl);
        });
    });
});
