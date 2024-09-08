import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Button from "../Button";
import { FiArrowUpRight } from "react-icons/fi";
import HeaderTitle from "../HeaderTitle";
import Link from "next/link";
import { Service, servicesData } from "@/app/services/servicesData";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ServicesSection: React.ForwardRefRenderFunction<HTMLDivElement> = (
  props,
  ref
) => {
  const [activeService, setActiveService] = useState<Service>(servicesData[0]);
  const titlesRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const servicesRefs = useRef<(HTMLLIElement | null)[]>([]);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [imageVisible, setImageVisible] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Scroll right column to align selected service with the top of the left column
    if (rightColumnRef.current && activeService) {
      const selectedServiceRef = titlesRefs.current.find(
        (ref) => ref && ref.textContent === activeService.title
      );
      if (selectedServiceRef) {
        gsap.to(rightColumnRef.current, {
          duration: 1,
          scrollTo: {
            y: selectedServiceRef.offsetTop - rightColumnRef.current.offsetTop,
            autoKill: false,
          },
          ease: "power3.out",
        });
      }
    }
  }, [activeService]);

  useEffect(() => {
    // Update active service based on scroll position
    const updateActiveService = () => {
      const scrollY = window.scrollY;
      let activeIndex = 0;
      for (let i = 0; i < servicesRefs.current.length; i++) {
        const element = servicesRefs.current[i];
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollY >= offsetTop) {
            activeIndex = i;
          }
        }
      }
      setActiveService(servicesData[activeIndex]);
    };

    updateActiveService(); // Call on initial render

    // Listen to scroll event to update active service
    window.addEventListener("scroll", updateActiveService);

    return () => {
      window.removeEventListener("scroll", updateActiveService);
    };
  }, []);

  const handleServiceClick = (index: number) => {
    const clickedService = servicesData[index];
    if (activeService.title === clickedService.title) {
      return;
    }
    setActiveService(clickedService);

    // Scroll right column to bring clicked service content to the top
    if (rightColumnRef.current) {
      const targetServiceRef = servicesRefs.current[index];
      if (targetServiceRef) {
        gsap.to(rightColumnRef.current, {
          duration: 1,
          scrollTo: {
            y: targetServiceRef.offsetTop - rightColumnRef.current.offsetTop,
            offsetY: 0, // Ensure the content aligns to the top
            autoKill: false,
          },
          ease: "power3.out",
        });
      }
    }
  };

  return (
    <div className=" bg-black  max-h-screen pt-10 md:pt-16 lg:pt-20">
      <div className="px-7 md:px-20 pb-10 ">
        <div className="mb-5 flex flex-col md:flex-row justify-between items-center">
          <HeaderTitle
            title="Our Services"
            className="pb-10 lg:pb-0 text-xl md:text-5xl"
          />
          <Link href={"/ContactUs"} className="hidden md:block">
            <Button
              id="hero__body__left__btn"
              text="Get in touch"
              icon={
                <FiArrowUpRight className="h-3 w-3 lg:h-5 lg:w-5 text-white " />
              }
              customStyles={
                "border-b hover:border-b-4 text-center lg:text-left px-2 bg-red-700 hover:bg-red-500 py-2 transition-all duration-300 ease-in-out"
              }
              textStyle={"text-xs md:text-sm lg:text-base"}
            />
          </Link>
        </div>
        <div className="relative grid grid-cols-7 lg:grid-cols-2">
          <div className="relative col-span-3 lg:col-span-1">
            {/* {imageVisible && (
              <img
                src={activeService.image}
                alt={activeService.title}
                className={`w-2/5 my-4 rounded-2xl transition-opacity duration-500 ${
                  imageVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ opacity: imageVisible ? 1 : 0 }}
                ref={imageRef}
              />
            )} */}
            <div className="service-content">
              <ul className="flex flex-col w-[40%] md:w-[60%]">
                {servicesData.map((service, index) => (
                  <li
                    key={index}
                    className={`my-1 cursor-pointer ${
                      activeService.title === service.title ? "text-white" : ""
                    }`}
                    onClick={() => handleServiceClick(index)}
                  >
                    <div>
                      <h2
                        className={`py-1 px-2 text-xs  ${
                          activeService.title === service.title
                            ? " text-white"
                            : "text-zinc-700"
                        }`}
                      >
                        {service.title}
                      </h2>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="overflow-auto w-full col-span-4 lg:col-span-1"
            style={{ height: "calc(100vh - 200px)" }}
            ref={rightColumnRef}
          >
            <ul className="flex flex-col">
              {servicesData.map((service, index) => (
                <>
                  <li
                    key={index}
                    className={`text-2xl mb-10 cursor-pointer ${
                      activeService.title === service.title
                        ? "text-white"
                        : "text-gray-600 font-light"
                    }`}
                    ref={(ref: any) => (servicesRefs.current[index] = ref)}
                    onClick={() => handleServiceClick(index)}
                  >
                    <h2 className="py-1 font-bold">{service.title}</h2>
                    <h5 className="pb-1 text-base ">{service.subTitle}</h5>
                    <p className="mt-5 text-sm w-4/5">{service.description}</p>
                    <Link href={`/${service.link}`}>
                      <Button
                        id="hero__body__left__btn"
                        text="Learn More"
                        customStyles={
                          "border border-white px-2 py-1 w-28 rounded-2xl flex flex-row justify-center items-center hover:bg-white hover:text-black hover:border-black"
                        }
                        textStyle={"text-xs"}
                      />
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
