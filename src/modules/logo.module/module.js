document.addEventListener('DOMContentLoaded', () => {
    const logosSliders = document.querySelectorAll('.logo-slider');

    logosSliders && logosSliders.forEach(slider => {
        const itemsSpacingXL = slider.dataset.itemsSpacingXl;

        const swiper = new Swiper(slider, {
            direction: 'horizontal',
            slidesPerView: 4,
            spaceBetween: itemsSpacingXL, 
            loop: true,
            speed: 5000,
            autoplay: {
                delay: 0,
            }            
        })
    });
});