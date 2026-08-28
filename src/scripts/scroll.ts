const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (!reducedMotion.matches) {
  void Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('lenis'),
  ]).then(([{ gsap }, { ScrollTrigger }, { default: Lenis }]) => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const scenes = gsap.utils.toArray<HTMLElement>('.scene');
    scenes.forEach((scene, index) => {
      const content = scene.querySelectorAll<HTMLElement>(
        'h1, h2, h3, p, .button, .placeholder, .menu-bar, article, details',
      );

      if (index === 0) {
        gsap.from(content, {
          autoAlpha: 0,
          y: 24,
          stagger: 0.045,
          duration: 0.7,
          ease: 'power2.out',
        });
        return;
      }

      gsap.from(content, {
        autoAlpha: 0,
        y: 32,
        stagger: 0.035,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scene,
          start: 'top 72%',
          once: true,
        },
      });
    });
  });
}
