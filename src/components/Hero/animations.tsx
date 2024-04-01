import { gsap } from "gsap";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

export const animateTitle = () => {
  let titleSplit = new SplitText("#hero__title", { type: "chars" });

  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  tl.from(titleSplit.chars, {
    yPercent: 130,
    stagger: 0.5,
    duration: 2,
  })
    .to("#hero__title", {
      fontSize: "3rem", // Reduce font size to 1.5rem
      duration: 3,
      ease: "expo.out",
    })
    .from(".menu__button", {
      autoAlpha: 0,
      duration: 2,
      ease: "bounce.in",
    })
    .from("#hero__body", {
      autoAlpha: 0,
      y: 50,
      stagger: 0.5,
      duration: 2,
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
