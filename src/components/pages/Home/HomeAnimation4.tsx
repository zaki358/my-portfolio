import { useRef, useEffect } from "react";
import type { FC } from "react";
import styled from "styled-components";
import gsap from "gsap";

export const HomeAnimation4: FC = () => {
  useEffect(() => {
    bloodAnimation();
  }, []);
  // const refBox = useRef(null!);

  const bloodAnimation = () => {
    for (let i = 0; i < 10; i++) {
      const rect = document.createElement("img");
      rect.src = "/public/images/blood1.png";
      rect.classList.add("blood");
      document.querySelector(".container")?.appendChild(rect);
    }
    gsap.from(".blood", {
      y: 10,
      alpha: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        each: 1,
        from: "random",
      }, // 0.02秒ごとに出現
    });
  };

  return (
    <>
      <div className="container"></div>
    </>
  );
};
