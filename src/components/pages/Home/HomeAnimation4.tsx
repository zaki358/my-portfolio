import { useEffect, useRef } from "react";
import type { FC } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import styled from "styled-components";
import { useSound } from "../../../hooks/useSound";

export const HomeAnimation4: FC = () => {
  const refBox = useRef<HTMLDivElement>(null!);
  const { playSound: bloodSound } = useSound("/public/music/blood01.mp3");
  const { playSound: noiseSound } = useSound("/public/music/noise.wav");
  useEffect(() => {
    bloodAnimation();
  }, []);

  const bloodAnimation = () => {
    for (let i = 0; i < 50; i++) {
      const blood = document.createElement("img");
      blood.src = "/public/images/blood1.png";
      blood.alt = "many-bloods";
      blood.classList.add("blood");
      refBox.current.appendChild(blood);
      blood.style.position = "absolute";
      blood.style.left = `${Math.random() * window.innerWidth - 100}px`;
      blood.style.top = `${Math.random() * window.innerHeight - 100}px`;
      blood.style.zIndex = "-1";
      blood.style.width = "200px";
      blood.style.height = "200px";
      blood.style.display = "inline-block";
    }
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "custom",
      "M0,0 C0,0 0.192,0.02 0.388,0.102 0.462,0.133 0.51,0.128 0.58,0.166 0.644,0.2 0.763,0.211 0.814,0.262 0.857,0.305 0.839,0.472 0.888,0.51 0.925,0.538 0.952,0.882 0.952,0.882 0.952,0.882 0.966,0.934 0.966,0.934 0.966,0.934 1,1 1,1 "
    );
    gsap.set(".blood", {
      opacity: 0,
    });

    const tl = gsap.timeline({
      repeat: 0,
    });
    tl.to(".first-blood", {
      delay: 1,
      opacity: 1,
      duration: 0.1,
      onStart: () => {
        void bloodSound();
        console.log("血");
      },
    });
    tl.to(".second-blood", {
      delay: 3,
      opacity: 1,
      duration: 0.1,
      onStart: () => {
        void bloodSound();
      },
    });
    tl.to(".blood", {
      delay: 3,
      opacity: 1,
      ease: "custom",
      duration: 0.1,
      onStart: () => {
        void noiseSound();
      },
      onComplete: () => {
        void noiseSound(false);
      },
      stagger: {
        each: 0.05,
      },
    });
  };

  return (
    <>
      <SDivContainer className="container" ref={refBox}>
        <SDivBlood>
          <img
            src="/public/images/blood2.png"
            alt="first-blood"
            className="first-blood"
          />
          <img
            src="/public/images/blood3.png"
            alt="first-blood"
            className="second-blood"
          />
        </SDivBlood>
      </SDivContainer>
    </>
  );
};

const SDivContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const SDivBlood = styled.div`
  img:first-child {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: auto;
  }
  img:last-child {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 500px;
    height: auto;
  }
  .first-blood,
  .second-blood {
    opacity: 0;
  }
`;

// const bloods = gsap.utils.toArray(".blood");
// bloods.forEach((b) => {
//   console.log(b);
//   gsap.from(b, {
//     alpha: 0,
//     delay: 1,
//     duration: 2,
//     ease: "custom",
//   });
// });
