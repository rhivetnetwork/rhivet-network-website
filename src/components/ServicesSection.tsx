import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./styles/servicesSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".container section");
    const texts = gsap.utils.toArray<HTMLElement>(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: "+=3000",
        markers: true,
      },
    });

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section: HTMLElement) => {
      let text = section.querySelectorAll(".anim");
      if (text.length === 0) return;
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={containerRef} className={`container scrollx flex w-[300vw] `}>
        <svg
          viewBox="0 0 900 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
        >
          <path
            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
            fill="#900000"
          />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="900"
            height="10"
          >
            <path
              d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
              fill="#727318"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <rect className={`mask w-0`} y="-49" height="99" fill="white" />
          </g>
        </svg>
        <section className={`${styles.sec1} ${styles.pin} bg-red-500`}>
          <span>Advanced</span>
          <h1 className={` text-base m-0`}>Signify Elegance</h1>
          <div className={`flex gap-12`}>
            <p className={" text-sm"}>
              jashdkhdckjzlcxlkclszklk jashdkhdckjzlcxlkclszklk
              jashdkhdckjzlcxlkclszklk jashdkhdckjzlcxlkclszklk
            </p>
            <p className={" text-sm"}>
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
              sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
              Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
              risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>
        <section className={`${styles.sec2} ${styles.pin} bg-blue-600`}>
          <span className={styles.anim}>Advanced</span>
          <h1 className={`${styles.anim}  text-base m-0`}>Signify Elegance</h1>
          <div className={`flex gap-12 ${styles.anim}`}>
            <p className={" text-sm"}>
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
              sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
              Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
              risus amet urna. Urna egestas lorem.
            </p>
            <p className={" text-sm"}>
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
              sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
              Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
              risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>
        <section className={`${styles.sec3} ${styles.pin} bg-green-600`}>
          <span className={styles.anim}>Advanced</span>
          <h1 className={`${styles.anim}  text-base m-0`}>Signify Elegance</h1>
          <div className={styles.col}>
            <p className={" text-sm"}>
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
              sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
              Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
              risus amet urna. Urna egestas lorem.
            </p>
            <p className={" text-sm"}>
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
              sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
              Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
              risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>
      </div>
      <section style={{ backgroundColor: "lightblue" }}></section>
    </div>
  );
};

export default ServicesSection;
