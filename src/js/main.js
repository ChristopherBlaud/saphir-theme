import { gsap } from "./lib/gsap.min.js";    
import { ScrollTrigger } from "./lib/ScrollTrigger.min.js";
require("../css/main.css");

gsap.registerPlugin(ScrollTrigger);

(() => {
    const animatedModules = document.querySelectorAll('.animated');

    if (animatedModules) {
        animatedModules.forEach(module => {
            const YPos = parseInt(module.dataset.yPosition, 10) || 0,
                XPos = parseInt(module.dataset.xPosition, 10) || 0,
                scale = parseInt(module.dataset.scale, 10) || 1,
                rotate = parseInt(module.dataset.rotate, 10) || 0,
                skewX = parseInt(module.dataset.skewX, 10) || 0,
                skewY = parseInt(module.dataset.skewY, 10) || 0,
                opacity = (parseInt(module.dataset.opacity, 10) / 100) || 1,
                delay = parseInt(module.dataset.animationDelay, 10) || 0,
                bindOnScroll = JSON.parse(module.dataset.bindOnScroll);

            module.closest('.dnd-section').style.overflow = 'hidden';

            gsap.from(module, {
                x: XPos,
                y: YPos,
                scale: scale,
                rotate: rotate,
                skewX: skewX,
                skewY: skewY,
                opacity: opacity,
                scrollTrigger: {
                    trigger: module.parentNode,
                    start: 'top bottom',
                    end: `center bottom-=${delay}`,
                    scrub: bindOnScroll
                }
            });           
        });
    }; 
})();