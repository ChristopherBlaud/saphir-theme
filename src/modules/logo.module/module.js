document.addEventListener('DOMContentLoaded', () => {
    const logosSliders = document.querySelectorAll('.logo-slider');

    logosSliders && logosSliders.forEach(slider => {
        const itemsSpacingXL = slider.dataset.itemsSpacingXl,
            itemsSpacingMD = slider.dataset.itemsSpacingMd,
            itemsSpacingXS = slider.dataset.itemsSpacingXs,
            slidesPerViewXL = slider.dataset.slidesPerViewXl,
            slidesPerViewMD = slider.dataset.slidesPerViewMd,
            slidesPerViewXS = slider.dataset.slidesPerViewXs,
            speedXL = slider.dataset.sliderAnimationDurationXl,
            speedMD = slider.dataset.sliderAnimationDurationMd,
            speedXS = slider.dataset.sliderAnimationDurationXs;
        

        const swiper = new Swiper(slider, {
            direction: 'horizontal',
            slidesPerView: slidesPerViewXS,
            spaceBetween: itemsSpacingXS, 
            loop: true,
            speed: speedXS,
            autoplay: {
                delay: 0
            },
            breakpoints: {
                1024: {
                    slidesPerView: slidesPerViewXL,
                    spaceBetween: itemsSpacingXL,
                    speed: speedXL
                },
                768: {
                    slidesPerView: slidesPerViewMD,
                    spaceBetween: itemsSpacingMD,
                    speed: speedMD
                }
            }            
        });
    });
});