(() => {
    const accordions = document.querySelectorAll('.accordions__inner__item');

    accordions && accordions.forEach(accordion => {
        const button = accordion.querySelector('.accordions__inner__item__inner__title__icon');
        const description = accordion.querySelector('.accordions__inner__item__inner__description');
        const descriptionHeight = description.offsetHeight;

        description.style.height = '0';

        if (accordion.classList.contains('accordion--open')) {
            description.style.height = `${descriptionHeight}px`;
            description.style.marginTop = '32px';
        }

        button.addEventListener('click', () => {
            accordion.classList.toggle('accordion--open');

            if (accordion.classList.contains('accordion--open')) {
                description.style.height = `${descriptionHeight}px`;
                description.style.marginTop = '32px';
            }
            else {
                description.style.height = "0";
                description.style.marginTop = '0';
            }
        });
    });
})();