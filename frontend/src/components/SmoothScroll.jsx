import React, { useEffect } from 'react'
import Lenis from "lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) return;

        const isMobile = window.innerWidth < 768;

        const lenis = new Lenis({
            duration: isMobile ? 0.7 : 1.5,
            smooth: !isMobile, // disable smooth on mobile
            smoothTouch: false, // IMPORTANT
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}

export default SmoothScroll