import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import styles from "./Hero.module.scss";
import { animateTitle, animateImage, revealMenu } from "./animations";

import Logo from "@/components/Logo";
import Button from "../Button";
import { FiArrowUpRight } from "react-icons/fi";
import Globe from "../Globe";
import Link from "next/link";

const textVariations = [
  "Securing your digital assets",
  "Protecting your sensitive data",
  "Defending against cyber threats",
  "Ensuring information security",
  "Shielding your network from attacks",
  "Safeguarding your online presence",
];

const Hero = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);
  const heroBodyRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(animateImage(), 0);
    }, heroRef);

    const textTimeline = gsap.timeline({ repeat: -1 });
    let currentIndex = 0;

    const changeText = () => {
      textTimeline
        .to(heroBodyRef.current, { autoAlpha: 0, duration: 5 })
        .set(heroBodyRef.current, { textContent: textVariations[currentIndex] })
        .to(heroBodyRef.current, { autoAlpha: 1, duration: 5 });
      currentIndex = (currentIndex + 1) % textVariations.length;
    };

    changeText();
    const textInterval = setInterval(changeText, 5000);

    return () => {
      context.revert();
      clearInterval(textInterval);
      textTimeline.kill();
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div
        id="hero__body"
        className={`${styles.hero__body} px-10 md:px-12 lg:px-0 lg:pl-20 grid grid-cols-1 lg:grid-cols-2 mt-20`}
      >
        <div
          id="hero__body__left"
          className="flex flex-col justify-center items-center lg:items-start  text-white"
        >
          <div
            id="hero__body__left__services"
            className="text-4xl text-center md:text-6xl lg:text-left  pb-10 flex flex-col justify-center items-start "
            ref={heroBodyRef}
          ></div>
          <div id="hero__body__left__subservices">
            <h4 className="text-base md:text-xl text-center lg:text-left text-white font-light">
              Rhivet is an award-winning Cybersecurity and IT consulting
              company. We innovate and transform products for startups and
              enterprises.
            </h4>
          </div>
          <Link href={"/ContactUs"}>
            <Button
              id="hero__body__left__btn"
              text="Get in touch"
              icon={<FiArrowUpRight className="h-8 w-8 lg:h-10 lg:w-10 " />}
              customStyles={
                "border-b hover:border-b-4 text-center lg:text-left px-2 bg-red-700 hover:bg-red-500 py-2 transition-all duration-300 ease-in-out"
              }
              textStyle={"text-lg md:text-2xl lg:text-4xl"}
            />
          </Link>
        </div>
        <Globe />
      </div>
    </section>
  );
};

export default Hero;
