import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

import ServicesSection from "@/components/Services/ServicesSection";
import SayHello from "./SayHello";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const HomeScreen = () => {
  return (
    <Layout>
      <Hero />
      <ServicesSection />
      <SayHello />
    </Layout>
  );
};

export default HomeScreen;
