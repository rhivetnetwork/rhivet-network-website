"use client";

import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import HomeScreen from "./HomeScreen";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

const Home = () => {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl: any = gsap.timeline({
        onComplete: () => setLoaderFinished(true),
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>
      <CustomCursor />
      {loaderFinished ? <HomeScreen /> : <Loader timeline={timeline} />}
    </main>
  );
};

export default Home;
