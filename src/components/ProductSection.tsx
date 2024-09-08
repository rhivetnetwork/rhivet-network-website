import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface ProductSectionProps {
  sectionRef: any;
  triggerRef: any;
}

function ProductSection({ sectionRef, triggerRef }: ProductSectionProps) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100px",
          end: "400 top",
          scrub: 10,
          pin: true,
          snap: {
            snapTo: 1 / 3, // Adjusts the snapping to each section
            duration: { min: 0.2, max: 1 }, // Controls the snap animation duration
            ease: "power1.inOut", // Easing for the snap animation
          },
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner bg-red-300 flex gap-10 justify-start items-center"
        >
          <div className="scroll-section h-[70vh] w-screen flex flex-col justify-center items-center bg-blue-200">
            <h3>Section 1</h3>
          </div>
          <div className="scroll-section h-[70vh] w-screen flex flex-col justify-center items-center  bg-blue-400 ">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section h-[70vh] w-screen flex flex-col justify-center items-center  bg-blue-700">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section h-[70vh] w-screen flex flex-col justify-center items-center  bg-green-200">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
