// GSAP Animations
gsap.from("#intro", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
  });
  
  gsap.from(".subtitle", {
    duration: 1.5,
    opacity: 0,
    delay: 0.5,
    y: 30,
  });
  
  gsap.from("section", {
    scrollTrigger: {
      trigger: "section",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1
  });
  