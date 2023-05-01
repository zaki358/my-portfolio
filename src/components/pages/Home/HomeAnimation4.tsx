import { useEffect, useRef } from "react";
import type { FC } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import styled from "styled-components";

export const HomeAnimation4: FC = () => {
  const refBox = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    bloodAnimation();
  }, []);
  // const refBox = useRef(null!);

  const bloodAnimation = () => {
    for (let i = 0; i < 200; i++) {
      const blood = document.createElement("img");
      blood.src = "/public/images/blood1.png";
      blood.classList.add("blood");
      // document.querySelector(".container")?.appendChild(blood);
      refBox.current.appendChild(blood);
      blood.style.position = "absolute";
      blood.style.left = `${Math.random() * window.innerWidth - 100}px`;
      blood.style.top = `${Math.random() * window.innerHeight - 100}px`;
      blood.style.zIndex = "-1";
    }
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "custom",
      "M0,0 C0,0 0.192,0.02 0.388,0.102 0.462,0.133 0.51,0.128 0.58,0.166 0.644,0.2 0.763,0.211 0.814,0.262 0.857,0.305 0.839,0.472 0.888,0.51 0.925,0.538 0.952,0.882 0.952,0.882 0.952,0.882 0.966,0.934 0.966,0.934 0.966,0.934 1,1 1,1 "
    );
    // gsap.from(".blood", {
    //   x: 0,
    //   y: 0,
    //   alpha: 0,
    //   delay: 1,
    //   duration: 2,
    //   ease: "custom",
    //   onRepeat:()=>{console.log("処理")},
    //   stagger: {
    //     each: 0.01,

    //     // from: "random",
    //   }, // 0.02秒ごとに出現
    // });
    const bloods = gsap.utils.toArray(".blood");
    bloods.forEach((b) => {
      console.log(b);
      gsap.from(b, {
        alpha: 0,
        delay: 1,
        duration: 2,
        ease: "custom",
      });
    });
  };

  return (
    <>
      <SDivContainer className="container" ref={refBox}>
        <h1>ハロー</h1>
      </SDivContainer>
    </>
  );
};

const SDivContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
