import { gsap } from "gsap";

export const animateTitle = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  tl.from("#hero__body", {
    autoAlpha: 0,
    delay: 2,
    y: 100,
    stagger: 0.5,
    duration: 5,
    ease: "expo.out",
  });

  return tl;
};

export const animateImage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 1.5,
    },
  });

  tl.to("[data-image-overlay]", {
    scaleY: 1,
  })
    .from(
      "[data-image]",
      {
        yPercent: 100,
      },
      "<"
    )
    .to("[data-image-overlay]", {
      scaleY: 0,
      transformOrigin: "top center",
    })
    .from(
      "[data-image]",
      {
        duration: 2,
        scale: 1.3,
      },
      "<"
    );

  return tl;
};

export const revealMenu = () => {};
