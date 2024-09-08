"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeaderTitle from "@/components/HeaderTitle";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Breadcrumb from "@/components/Breadcrumb";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./services.module.scss";
import ProductSection from "@/components/ProductSection";
import AboutUsheader from "@/components/AboutUsheader";
import ServicesSection from "@/components/ServicesSection";
import SayHello from "../SayHello";
import DataInfiniteScroll from "@/components/DataInfiniteScroll";
import ShineBorder from "@/components/magicui/shine-border";
import { TbFileAnalytics } from "react-icons/tb";
import { servicesData, Service } from "./servicesData";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const pageTitleRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImageSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImagetriggerRef = useRef<HTMLDivElement | null>(null);
  const SayHelloRef = useRef<HTMLDivElement | null>(null);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ourStoryHeader = ScrollTrigger.create({
      trigger: aboutUsImagetriggerRef.current,
      start: "center top",
      endTrigger: servicesRef.current,
      end: "top center",
      scrub: 0.6,
      pin: aboutUsImageSectionRef.current,
      animation: gsap.fromTo(
        pageTitleRef.current,
        { scale: 1 },
        {
          scale: 0.7,
          ease: "power2.inOut",
          duration: 1,
        }
      ),
    });
    return () => {
      ourStoryHeader.kill();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Layout>
        <section className="scroll-section-outer h-screen">
          <div ref={aboutUsImagetriggerRef} className="h-full  bg-black">
            <div
              ref={aboutUsImageSectionRef}
              className="scroll-section-inner z-10 top-0 left-0 w-screen h-[80vh]"
            >
              <div
                className={`${styles.our__team__image} flex justify-start h-full items-end pb-3 w-full bg-cover bg-center bg-no-repeat bg-black`}
                style={{
                  backgroundImage: "url('/images/services.jpg')",
                }}
              >
                <div className="our__story w-full ">
                  <HeaderTitle
                    title="Services"
                    HeaderTitleRef={pageTitleRef}
                    className="text-7xl md:text-9xl lg:text-[8rem] text-center font-light text-shadow-lg"
                  />
                </div>
              </div>
              <div className="px-16 flex justify-end z-10 bg-black">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </section>
        <div className="w-screen ">
          <div className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-opacity-20 border-b border-b-white grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="Unmatched Full-Service Security" />
            </div>
            <div>
              <p className="text-base text-justify text-white">
                {`In today's landscape, traditional cybersecurity threat prevention and detection methods are insufficient against the relentless wave of cyberattacks. At Rhivet Networks, we are redefining trust and revolutionizing security strategies. Our comprehensive approach to cybersecurity encompasses expert security and risk management, advanced security architecture and engineering, robust network security, precise identity and access management, efficient security operations, thorough asset security, and secure software development. We provide full-service peace of mind, ensuring your organization is protected from every angle.`}
              </p>
            </div>
          </div>

          <div
            className="px-10 md:px-12 lg:px-40 py-20 md:py-32 bg-white border-opacity-20 border-b border-b-white flex flex-row flex-wrap justify-center items-center md:gap-10"
            ref={servicesRef}
          >
            {servicesData.map((service: Service) => (
              <Link href={`/${service.link}`} key={service.title}>
                <ShineBorder
                  key={service.title}
                  className=" w-48 h-48 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background hover:bg-zinc-100 md:shadow-md md:hover:shadow-xl"
                  color={["#d2d2d2", "#b2b2b2", "#b2b2b2"]}
                  borderWidth={1}
                  duration={60}
                >
                  <div className="p-3 rounded-full bg-red-500 text-white">
                    {service.icon}
                  </div>
                  <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-lg font-semibold leading-none dark:from-white dark:to-slate-900/10">
                    {service.title}
                  </span>
                </ShineBorder>
              </Link>
            ))}
          </div>

          <div className="h-[40vh] flex flex-col justify-center border-opacity-20 border-b border-b-white">
            <DataInfiniteScroll />
          </div>

          <div ref={SayHelloRef}>
            <SayHello />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Services;
