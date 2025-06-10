gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

gsap.registerPlugin(ScrollTrigger);

const mm1 = gsap.matchMedia();

mm1.add("(min-width: 768px)", () => {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
    
    Shery.makeMagnet(".nav .name, .nav  a" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });
    
});

var tl = gsap.timeline();

 tl.from(".nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power1.in",
    stagger: 0.2
});

tl.from(" .intro ", {
    opacity: 0,
    duration: 2,
    ease: "sine.in",
    stagger: 0.2,
});

gsap.from(".skills .icons > div", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      end: "bottom 80%",
      scroller: ".main",
    },
    opacity: 0,
    y: 50,
    duration: 2,
    stagger: 0.2,
    ease: "power2.out",
});

gsap.from(".projects", {
      scrollTrigger: {
      trigger: ".project1",
      start: "top 90%",
      scroller: ".main",
    },
    opacity: 0,
    duration: 2,
    ease: "sine.in",
});

gsap.from(".footer", {
      scrollTrigger: {
      trigger: ".footer",
      start: "top 90%",
      scroller: ".main",
    },
    opacity: 0,
    duration: 1,
    ease: "sine.in",
});

const menuBtn = document.getElementById("menu-btn");
  const menuLinks = document.getElementById("menu-links");

  menuBtn.onclick = () => {
    menuLinks.classList.toggle("hidden");

    // Toggle icon
    if (menuBtn.classList.contains("ri-menu-line")) {
      menuBtn.classList.remove("ri-menu-line");
      menuBtn.classList.add("ri-close-line");
    } else {
      menuBtn.classList.remove("ri-close-line");
      menuBtn.classList.add("ri-menu-line");
    }
};
