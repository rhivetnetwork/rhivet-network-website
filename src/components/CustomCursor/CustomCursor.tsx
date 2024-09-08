"use client";

import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const CustomCursor: React.FC = () => {
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const positionRef = useRef<{
    mouseX: number;
    mouseY: number;
    destinationX: number;
    destinationY: number;
    distanceX: number;
    distanceY: number;
    key: number;
  }>({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const [cursorClass, setCursorClass] = useState("regular");
  console.log(cursorClass);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      let path = event.composedPath() as HTMLElement[];
      if (
        path.some((x) => x.tagName === "BUTTON" && x.id === "say__hello__btn")
      ) {
        setCursorClass("say-hello");
      } else if (
        path.some((x) => x.tagName === "A" || x.tagName === "BUTTON")
      ) {
        setCursorClass("small");
      } else if (path.some((x) => x.id === "more__info")) {
        setCursorClass("small");
      } else {
        setCursorClass("regular");
      }

      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      if (secondaryCursor.current) {
        positionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);

  return (
    <div className={`cursor-wrapper default`}>
      <div
        className={`secondary-cursor ${cursorClass}`}
        ref={secondaryCursor}
      ></div>
    </div>
  );
};

export default CustomCursor;
