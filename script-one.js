gsap.registerPlugin(ScrollTrigger);

//FIRST PART -----------------------------------------------------------------

gsap.to(".slider-line", {
    y: 183.5,
    rotate: 1845,
    ease: "none",
    scrollTrigger: {
        start: "top top",
        end: "bottom bottom",
        //        trigger: ".slider-line",
        scrub: 2,
    },
});

gsap.to(".names", {
    xPercent: 50,
    ease: "none",
    scrollTrigger: {
        trigger: ".names",
        scrub: 3,
    },
});

gsap.to(".star", {
    rotate: 2000,
    ease: "none",
    scrollTrigger: {
        trigger: ".names",
        scrub: 3,
    },
});

//STEP ONE -----------------------------------------------------------------

gsap.to(".step-one-img-one", {
    backgroundPosition: "-200px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-one",
        scrub: 2,
    },
});

gsap.to(".step-one-img-two", {
    backgroundPosition: "-100px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-one",
        scrub: 2,
    },
});

//STEP TWO -----------------------------------------------------------------

gsap.to(".step-two-img-one", {
    backgroundPosition: "0px 300px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-two",
        scrub: 2,
    },
});

gsap.to(".step-two-img-two", {
    backgroundPosition: "0px -100px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-two",
        scrub: 2,
    },
});

//STEP THREE -----------------------------------------------------------------

gsap.to(".step-three-img-one", {
    backgroundPosition: "-50px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-three",
        scrub: 2,
    },
});

gsap.to(".step-three-img-two-one", {
    backgroundPosition: "-100px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-three",
        scrub: 2,
    },
});

gsap.to(".step-three-img-two-two", {
    backgroundPosition: "-150px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-three",
        scrub: 2,
    },
});

//VERIFICATION ONE -----------------------------------------------------------------


gsap.to(".verification-one-img-one-step-one", {
    backgroundPosition: "-130px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-one",
        scrub: 2,
    },
});

gsap.to(".verification-one-img-two-step-one", {
    backgroundPosition: "-80px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-one",
        scrub: 2,
    },
});

gsap.to(".verification-one-img-three-step-one", {
    backgroundPosition: "-100px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-one",
        scrub: 2,
    },
});

//VERIFICATION TWO -----------------------------------------------------------------


gsap.to(".verification-two-img-one-step-one", {
    backgroundPosition: "-40px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-two",
        scrub: 2,
    },
});

gsap.to(".verification-two-img-two-step-one", {
    backgroundPosition: "-80px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-two",
        scrub: 2,
    },
});

gsap.to(".verification-two-img-three-step-one", {
    backgroundPosition: "-20px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-two",
        scrub: 2,
    },
});

//VERIFICATION THREE -----------------------------------------------------------------


gsap.to(".verification-three-img-one-step-one", {
    backgroundPosition: "-40px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-three",
        scrub: 2,
    },
});

gsap.to(".verification-three-img-two-step-one", {
    backgroundPosition: "-80px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".verification-three",
        scrub: 2,
    },
});

//STEP FOUR -----------------------------------------------------------------

gsap.to(".step-four-img-one", {
    backgroundPosition: "-50px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-four",
        scrub: 2,
    },
});

gsap.to(".step-four-img-two", {
    backgroundPosition: "-200px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-four",
        scrub: 2,
    },
});

//STEP FIVE -----------------------------------------------------------------

gsap.to(".step-five-img-one", {
    backgroundPosition: "-40px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-five",
        scrub: 2,
    },
});

gsap.to(".step-five-img-two", {
    backgroundPosition: "-200px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-five",
        scrub: 2,
    },
});

//STEP SIX -----------------------------------------------------------------

gsap.to(".step-six-img-one", {
    backgroundPosition: "-170px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-six",
        scrub: 2,
    },
});

gsap.to(".step-six-img-two-one", {
    backgroundPosition: "-40px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-six",
        scrub: 2,
    },
});

gsap.to(".step-six-img-two-two", {
    backgroundPosition: "-200px 0px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-six",
        scrub: 2,
    },
});

//STEP SEVEN -----------------------------------------------------------------

gsap.to(".step-seven-img-one", {
    backgroundPosition: "0px -100px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-seven",
        scrub: 2,
    },
});

gsap.to(".step-seven-img-two", {
    backgroundPosition: "0px -230px",
    ease: "none",
    scrollTrigger: {
        trigger: ".step-seven",
        scrub: 2,
    },
});