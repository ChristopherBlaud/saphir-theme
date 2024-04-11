document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.is-hidden');
    modules && modules.forEach(module => {
        if (module.dataset.hideOnDesktop === "true" ) module.closest('.dnd-column').classList.add('hide-on-desktop');
        if (module.dataset.hideOnTablet === "true" ) module.closest('.dnd-column').classList.add('hide-on-tablet');
        if (module.dataset.hideOnMobile === "true" ) module.closest('.dnd-column').classList.add('hide-on-mobile');
    });
});