const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

Shery.textAnimate("#left h3 " /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
