const fetchSVGContent = async (url, container) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error occurred during file recovery');
        } ;

        const result =  await response.text();
        container.innerHTML = result;
        container.closest(".dnd-row").classList.add('full-screen');

    } catch (error) {
        console.error(error);
    };
};

(() => {
    const imageContainer = document.querySelectorAll('.background-image__inner');

    imageContainer && imageContainer.forEach(container => {
        const url = container.dataset.src

        if (url.endsWith('.svg')) {
            fetchSVGContent(url, container);
        } else {
            container.textContent = "Error. Only the svg format is supported.";
        };
    });
})();