(() => {
    const logosSliders = document.querySelectorAll('.swiper');

    logosSliders && logosSliders.forEach(slider => {
        
        const itemsSpacingXL = slider.dataset.itemsSpacingXl,
            itemsSpacingMD = slider.dataset.itemsSpacingMd,
            itemsSpacingXS = slider.dataset.itemsSpacingXs,
            slidesPerViewXL = slider.dataset.slidesPerViewXl,
            slidesPerViewMD = slider.dataset.slidesPerViewMd,
            slidesPerViewXS = slider.dataset.slidesPerViewXs,
            speedXL = slider.dataset.sliderAnimationDurationXl,
            speedMD = slider.dataset.sliderAnimationDurationMd,
            speedXS = slider.dataset.sliderAnimationDurationXs,
            autoplayXL = JSON.parse(slider.dataset.autoplayXl),
            autoplayMD = JSON.parse(slider.dataset.autoplayMd),
            autoplayXS = JSON.parse(slider.dataset.autoplayXs),
            autoplayDelayXL = slider.dataset.autoplayDelayXl,
            autoplayDelayMD = slider.dataset.autoplayDelayMd,
            autoplayDelayXS = slider.dataset.autoplayDelayXs;            
        

        const swiper = new Swiper(slider, {
            direction: 'horizontal',
            slidesPerView: slidesPerViewXS,
            spaceBetween: itemsSpacingXS, 
            loop: true,
            speed: speedXS,
            autoplay: autoplayXS && { delay: autoplayDelayXS },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true        
            }, 
            breakpoints: {
                1024: {
                    slidesPerView: slidesPerViewXL,
                    spaceBetween: itemsSpacingXL,
                    speed: speedXL,
                    autoplay: autoplayXL && { delay: autoplayDelayXL },
                },
                768: {
                    slidesPerView: slidesPerViewMD,
                    spaceBetween: itemsSpacingMD,
                    speed: speedMD,
                    autoplay: autoplayMD && { delay: autoplayDelayMD },
                }
            }            
        });
    });
})();