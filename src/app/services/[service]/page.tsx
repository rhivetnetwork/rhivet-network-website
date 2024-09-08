// app/services/[service]/page.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { servicesData } from "../servicesData";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import HeaderTitle from "@/components/HeaderTitle";
import styles from "../services.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DataInfiniteScroll from "@/components/DataInfiniteScroll";
import SayHello from "@/app/SayHello";
import Breadcrumb from "@/components/Breadcrumb";

const Service = () => {
  const router = useRouter();
  const pathname = usePathname();
  const service = pathname.split("/").pop();

  const pageTitleRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImageSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutUsImagetriggerRef = useRef<HTMLDivElement | null>(null);
  const SayHelloRef = useRef<HTMLDivElement | null>(null);

  const servicesRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);

  const serviceData = servicesData.find(
    (s) => s.link.split("/").pop() === service
  );

  useEffect(() => {
    if (!serviceData) {
      router.push("/404");
    }
  }, [serviceData, router]);

  if (!serviceData) {
    return null; // or a loading spinner
  }

  return (
    <>
      <CustomCursor />
      <Layout>
        <section className="scroll-section-outer h-[60vh]">
          <div ref={aboutUsImagetriggerRef} className="h-full">
            <div
              ref={aboutUsImageSectionRef}
              className="scroll-section-inner z-10 top-0 left-0 w-screen h-[50vh]"
            >
              <div
                className={`${styles.our__team__image} flex justify-center h-full items-end pb-20 w-full bg-cover bg-center bg-no-repeat bg-black`}
                style={{
                  backgroundImage: "url('/images/services-header.jpg')",
                }}
              >
                <div className="our__story">
                  <HeaderTitle
                    title={serviceData.title}
                    HeaderTitleRef={pageTitleRef}
                    className="text-5xl md:text-7xl lg:text-[5rem] text-center font-light text-shadow-lg"
                  />
                </div>
              </div>
              <div className="px-16 flex justify-end z-40 bg-black">
                <Breadcrumb />
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto ">
          <div className="px-2 md:px-20 lg:px-32 h-[70vh] gap-10 grid grid-cols-1 lg:grid-cols-2 border-b border-opacity-10 border-b-white">
            <div
              className={`${styles.our__team__image} flex justify-start items-end pb-3 w-full bg-cover bg-center bg-no-repeat bg-black`}
              style={{
                backgroundImage: `url(${serviceData.mainImage})`,
              }}
            />
            <div>
              <p className="mb-8 text-lg md:text-2xl text-white text-justify">
                {serviceData.description}
              </p>
            </div>
          </div>

          <div className="px-10 lg:px-32 my-20">
            <HeaderTitle
              title={"Benefits"}
              className="text-5xl md:text-7xl lg:text-[5rem] text-center font-light text-shadow"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 border border-white border-opacity-10 bg-zinc-950 text-white rounded shadow"
                >
                  <div className="flex items-center mb-4">
                    {benefit.icon}
                    <h3 className="text-xl font-bold ml-2">{benefit.title}</h3>
                  </div>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div ref={servicesRef}></div>
          <div className="h-[40vh] flex flex-col justify-center border-opacity-20 border-b border-b-white">
            <DataInfiniteScroll />
          </div>

          <div>
            <SayHello />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Service;
