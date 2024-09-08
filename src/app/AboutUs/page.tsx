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
import styles from "./aboutus.module.scss";
import ProductSection from "@/components/ProductSection";
import AboutUsheader from "@/components/AboutUsheader";
import ServicesSection from "@/components/ServicesSection";
import SayHello from "../SayHello";
import DataInfiniteScroll from "@/components/DataInfiniteScroll";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const imageRef = useRef(null);
  const pageTitleRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImageSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImagetriggerRef = useRef<HTMLDivElement | null>(null);
  const ourTeamRef = useRef<HTMLDivElement | null>(null);

  const productsSectionRef = useRef<HTMLDivElement | null>(null);
  const productsSectionTriggerRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ourStoryHeader = ScrollTrigger.create({
      trigger: aboutUsImagetriggerRef.current,
      start: "center top",
      endTrigger: ourTeamRef.current,
      end: "bottom center",
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
                className={`${styles.our__team__image} flex justify-center h-full items-end pb-3 w-full bg-cover bg-center bg-no-repeat bg-black`}
                style={{
                  backgroundImage: "url('/images/who-we-are.jpg')",
                }}
              >
                <div className="our__story">
                  <HeaderTitle
                    title="About Us"
                    HeaderTitleRef={pageTitleRef}
                    className="text-7xl md:text-9xl lg:text-[8rem] font-light"
                  />
                </div>
              </div>
              <div className="px-16 flex justify-end z-10 bg-black">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </section>
        <div className="w-screen">
          <div className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-opacity-20 border-b border-b-white grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="Our Story" />
            </div>
            <div>
              <p className="text-base text-justify text-white">
                {`Incorporated in 2021, Rhivet Networks was founded with a mission to provide comprehensive cybersecurity solutions, business IT consultancy, and auditing services. Our journey began with a team of dedicated professionals who recognized the increasing need for robust cybersecurity measures in today's digital landscape. Over the years, we have grown into a trusted partner for businesses of all sizes, delivering tailored services that ensure the security and efficiency of their operations.`}
              </p>
            </div>
          </div>
          <div className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-b border-b-white border-opacity-20 grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="What we do" />
            </div>
            <div>
              <p className="text-base text-justify text-white">
                {`At Rhivet Networks, we offer a wide range of services designed to protect and enhance your business:`}
              </p>

              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Cybersecurity Services:
                </span>{" "}
                From threat detection and response to vulnerability assessments
                and penetration testing, we provide end-to-end cybersecurity
                solutions.
              </p>

              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Business IT Consultancy:
                </span>{" "}
                Our experts offer strategic advice and implementation support to
                help you leverage technology for business growth and efficiency.
              </p>
              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Supply and Auditing:
                </span>{" "}
                We assist in sourcing and auditing IT resources, ensuring
                compliance with industry standards and optimizing your IT
                infrastructure.
              </p>
            </div>
          </div>

          <div className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-b border-b-white border-opacity-20 grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="Mission & Vision" />
            </div>
            <div>
              <p className="text-base text-justify text-white">
                {`At Rhivet Networks, we offer a wide range of services designed to protect and enhance your business:`}
              </p>

              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Mission:{" "}
                </span>{" "}
                Our mission is to empower businesses with innovative
                cybersecurity solutions and IT services that protect their
                assets, streamline operations, and drive sustainable growth.
              </p>
              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Vision:{" "}
                </span>{" "}
                To be a global leader in cybersecurity and IT consultancy,
                renowned for our expertise, integrity, and commitment to
                excellence.
              </p>
            </div>
          </div>
          <div className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-b border-b-white border-opacity-20 grid grid-cols-1 md:grid-cols-2 items-center md:gap-10">
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="Core Values" />
            </div>
            <div>
              <p className="text-base text-justify text-white">
                {`At Rhivet Networks, we offer a wide range of services designed to protect and enhance your business:`}
              </p>

              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Customer Focus:
                </span>{" "}
                Our clients are at the heart of everything we do. We prioritize
                their needs and work tirelessly to exceed their expectations.
              </p>

              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Integrity:{" "}
                </span>{" "}
                We uphold the highest standards of honesty and transparency in
                all our dealings.
              </p>
              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Excellence:{" "}
                </span>{" "}
                We strive for excellence in everything we do, delivering
                top-notch services to our clients.
              </p>
              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Innovation:{" "}
                </span>{" "}
                We embrace innovation and continuously seek out new ways to
                solve complex challenges.
              </p>
              <p className="text-base text-white mt-3">
                <span className="font-bold text-lg text-gray-400">
                  Collaboration:
                </span>{" "}
                We believe in the power of teamwork and foster a collaborative
                environment both within our company and with our clients.
              </p>
            </div>
          </div>
          <DataInfiniteScroll />
          <div
            ref={ourTeamRef}
            className="px-10 md:px-12 lg:px-40 py-20 md:py-32 border-b border-b-white border-opacity-20 grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 h-[100vh]"
          >
            <div className="mb-10 text-left our__story md:text-right md:mb-0">
              <HeaderTitle title="Our Team" />
              <p className="text-base text-white text-justify mt-3">
                At Rhivet Networks, our team is our greatest asset. Comprised of
                highly skilled and dedicated professionals, we bring together a
                wealth of expertise in cybersecurity, IT consultancy, and
                auditing. Each member of our team is passionate about technology
                and committed to delivering the highest standards of service to
                our clients. Our collaborative approach and continuous pursuit
                of excellence enable us to tackle complex challenges and drive
                innovation. Together, we are dedicated to safeguarding your
                business and empowering you to achieve your goals with
                confidence.
              </p>
            </div>
            <div
              className={`${styles.our__team__image} flex justify-center h-full items-end pb-3 w-full bg-cover bg-center bg-no-repeat bg-black`}
              style={{
                backgroundImage: "url('/images/our-team.jpg')",
              }}
            ></div>
          </div>
          <SayHello />
        </div>
      </Layout>
    </>
  );
};

export default AboutUs;
