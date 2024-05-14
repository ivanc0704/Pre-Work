
gsap.registerPlugin(ScrollTrigger);

gsap.to(".title",{
    scrollTrigger:{
        trigger: "#bg",
        scrub: 1,
        pin:true
        
    },
    opacity:1,
});