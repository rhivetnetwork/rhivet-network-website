import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeaderTitle from "./HeaderTitle";
import Breadcrumb from "./Breadcrumb";

function AboutUsheader() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ourStoryHeader = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "center top",
      endTrigger: ".product__side",
      end: "top top",
      scrub: 0.6,
      pin: sectionRef.current,
      onEnter: () => {
        console.log("Scrolltrigger has entered");
      },
      onLeave: () => {
        console.log("Scroll trigger ended");
      },
      markers: true,
    });
    return () => {
      ourStoryHeader.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer h-screen">
      <div ref={triggerRef} className="h-full">
        <div
          ref={sectionRef}
          className="scroll-section-inner z-10 top-0 left-0 w-screen h-[80vh]"
        >
          <div
            className={` flex justify-center h-full items-end pb-3 w-full bg-cover bg-center bg-no-repeat bg-black`}
            style={{
              backgroundImage: "url('/images/who-we-are.jpg')",
            }}
          >
            <div className="our__story">
              <HeaderTitle title="About Us" />
            </div>
          </div>
          <div className="px-16 flex justify-end">
            <Breadcrumb pageName="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsheader;
