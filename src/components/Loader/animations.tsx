import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef: any) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power3.inOut",
  });

  return tl;
};

export const collapseWords = (wordGroupsRef: any) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });

  return tl;
};

export const progressAnimation = (progressRef: any, progressNumberRef: any) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};
