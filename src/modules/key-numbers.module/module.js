(() => {
    const keyNumbers = document.querySelectorAll('.key-numbers__inner__item__inner__number');

    keyNumbers && keyNumbers.forEach(number => {
        const type = number.dataset.type;
        
        if (type === 'number') {
            const numberContainer = number.querySelector('.key-numbers__inner__item__inner__number__value');
            const value = parseInt(numberContainer.dataset.number, 10);
            let duration = parseInt(numberContainer.dataset.duration, 10);
            let start = 0;
            let interval;
            
            const increment = () => {
                numberContainer.textContent = start;

                if (start >= value - 4) {
                    duration += 10;
                    clearInterval(interval);
                    interval = setInterval(increment, duration)
                }
                if (start < value) {
                    start++;
                }
                else {
                    clearInterval(interval);
                }
            };

            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0
              };

            const numberObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      interval = setInterval(increment, duration)
                  }
                });
            }, options);

            numberObserver.observe(number);
        };
    });
})();