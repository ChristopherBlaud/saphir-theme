require("../css/main.css");

import { gsap } from "./lib/gsap.min.js";    
import { ScrollTrigger } from "./lib/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);

(() => {
    const animatedModules = document.querySelectorAll('.animated');

    if (animatedModules) {
        animatedModules.forEach(module => {
            const YPos = parseInt(module.dataset.yPosition, 10) || 0,
                opacity = (parseInt(module.dataset.opacity, 10) / 100) || 1,
                delay = parseInt(module.dataset.animationDelay, 10) || 0;

            module.closest('.dnd-section').style.overflow = 'hidden';

            gsap.from(module, {
                y: YPos,
                opacity: opacity,
                scrollTrigger: {
                    trigger: module,
                    start: 'top bottom',
                    end: `center bottom-=${delay}`,
                    scrub: true
                }
            })
        });
    } 
})();