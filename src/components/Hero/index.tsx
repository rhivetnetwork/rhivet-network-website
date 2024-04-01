import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import heroSectionImage3 from "../../../public/images/cybersecurity-3.jpg";
import heroSectionImage1 from "../../../public/images/cybersecurity-1.jpg";
import { CgMenuRound } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "./Hero.module.scss";
import { animateTitle, animateImage, revealMenu } from "./animations";

import Logo from "@/components/Logo";
import Button from "../Button";
import { FiArrowUpRight } from "react-icons/fi";

const MenuIcon = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="focus:outline-none flexs flex-row justify-center items-center"
  >
    <span className=" text-xl">Menu</span>
  </button>
);

const ModalMenu = ({ isOpen, onClose }: any) => (
  <div
    className={`fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm transition-opacity flex justify-center items-center ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <div className="w-full max-w-screen-lg h-7/10 bg-transparent z-50 shadow-2xl p-8 overflow-y-auto border border-white backdrop-filter backdrop-blur-2xl bg-opacity-10">
      <div className="flex justify-end relative">
        <button
          onClick={onClose}
          className="text-3xl text-black focus:outline-none hover:text-gray-500 absolute top-0 right-0"
        >
          <AiFillCloseCircle className="text-white" />
        </button>
      </div>
      <nav className="ml-10">
        <ul className="space-y-4">
          <li>
            <Button
              id="aboutUs"
              text="About"
              icon={<FiArrowUpRight className="h-10 w-10" />}
            />
          </li>
          <li>
            <Button
              id="aboutUs"
              text="Services"
              icon={<FiArrowUpRight className="h-10 w-10" />}
            />
          </li>
          <li>
            <Button
              id="aboutUs"
              text="Say Hello"
              icon={<FiArrowUpRight className="h-10 w-10" />}
            />
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

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
      <div className={styles.hero__top}>
        <nav className="nav__section flex w-full flex-row justify-between items-center min-h-10">
          <div className=" overflow-hidden">
            <h1 className={styles.hero__top__title} id="hero__title">
              Rhivet
            </h1>
          </div>
          <div className="menu__button flex flex-row justify-end items-center ">
            <MenuIcon onClick={toggleMenu} />
            <ModalMenu isOpen={isMenuOpen} onClose={toggleMenu} />
          </div>
        </nav>
      </div>
      <div
        id="hero__body"
        className={`${styles.hero__body} grid grid-cols-1 md:grid-cols-2`}
      >
        <div
          id="hero__body__left"
          className="flex flex-col justify-center items-start"
        >
          <div
            id="hero__body__left__services"
            className="text-7xl py-10 flex flex-col justify-center items-start "
            ref={heroBodyRef}
          ></div>
          <div id="hero__body__left__subservices">
            <h4 className="text-xl font-light">
              Rhivet is an award-winning Cybersecurity and IT consulting
              company. We innovate and transform products for startups and
              enterprises.
            </h4>
          </div>
          <Button
            id="hero__body__left__btn"
            text="Get in touch"
            icon={<FiArrowUpRight className="h-10 w-10" />}
            customStyles={"border-b border-current"}
          />
        </div>
        <div
          id="hero__body__right"
          className="h-full flex flex-row justify-center items-center "
        >
          <div
            id="hero__body__right__wrapper"
            className="w-[70%] flex flex-row  justify-center bg-slate-500 border-2  rounded-3xl overflow-hidden"
          >
            <Image
              src={heroSectionImage1}
              alt="cyberSecurity"
              className="w-[100%] "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
