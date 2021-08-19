window.addEventListener('load', animateApology);

function animateApology() {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  tl.from('h1', { autoAlpha: 0, y: -300, ease: 'Bounce.easeOut', duration: 2 });
  tl.from('.mid-1', {
    autoAlpha: 0,
    x: -200,
    ease: 'power4.out',
    duration: 1.5,
    delay: 1,
  });
  tl.from('.mid-2', {
    autoAlpha: 0,
    x: 200,
    ease: 'power4.out',
    duration: 1.5,
  });
  tl.from('.end', {
    autoAlpha: 0,
    y: 300,
    ease: 'Bounce.easeOut',
    duration: 3,
  });
  tl.to('.container', {
    rotation: 360,
    duration: 2,
    scale: 0.5,
    autoAlpha: 0,
    delay: 2,
  });
}
