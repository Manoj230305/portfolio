
$(function () {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(false);

  // create the smooth scroller FIRST!
  window.smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });

});