import { useContext, useEffect, useRef } from "react";
import type { FC, MouseEvent } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useSound } from "../../../hooks/useSound";

import { color } from "../../../style/foundations/mixin";
import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const HomeAnimation3: FC = () => {
  const refLightCursor = useRef<HTMLDivElement>(null!);
  const refTextSmall = useRef<HTMLDivElement>(null!);
  const refTextMedium = useRef<HTMLDivElement>(null!);
  const refTextLarge = useRef<HTMLDivElement>(null!);
  const refTextMain = useRef<HTMLDivElement>(null!);
  const { setSwitchNumber } = useContext(HomeSwitchContext);
  const { playSound } = useSound("/public/music/mitana.wav");

  useEffect(() => {
    const box = refLightCursor.current;
    gsap.to(box, {
      x: 10,
      y: 10,
    });
  }, []);

  const mouseMove = (e: MouseEvent): void => {
    const box = refLightCursor.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to(box, {
      x: mouseX - 100,
      y: mouseY - 100,
    });
  };

  const fadeInAnimationInitialize = () => {
    let animationCount = 0;
    let judge = false;
    const fadeInAnimation = (el: HTMLElement) => {
      const cursor = refLightCursor.current;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const tl = gsap.timeline({
        repeat: 0,
      });
      tl.to(cursor, {
        x: centerX - 100,
        y: centerY - 100,
      });
      tl.to(el, {
        opacity: 1,
        scale: 2,
      });
      tl.to(el, {
        display: "none",
        onStart: () => {
          judge = false;
        },
        onComplete: () => {
          if (!judge) {
            animationCount++;
            console.log(animationCount);
            judge = true;
          }
        },
      });
      if (animationCount === 2) {
        tl.to(refTextMain.current, {
          delay: 1,
          duration: 3,
          opacity: 1,
          scale: 4,
          onStart: () => {
            void playSound();
          },
          onComplete: () => {
            setTimeout(() => {
              setSwitchNumber(3);
            }, 4000);
          },
        });
      }
    };
    return fadeInAnimation;
  };
  const animation = fadeInAnimationInitialize();

  return (
    <SSection onMouseMove={mouseMove}>
      <SDivSmallArea
        ref={refTextSmall}
        onMouseEnter={() => animation(refTextSmall.current)}
        onMouseMove={(e) => e.stopPropagation()}
        onTouchMove={(e) => {
          animation(refTextSmall.current);
          e.stopPropagation();
        }}
      >
        <p>見たなぁ</p>
      </SDivSmallArea>
      <SDivMediumArea
        ref={refTextMedium}
        onMouseEnter={() => animation(refTextMedium.current)}
        onMouseMove={(e) => e.stopPropagation()}
        onTouchMove={(e) => {
          animation(refTextMedium.current);
          e.stopPropagation();
        }}
      >
        <p>見たなぁ</p>
      </SDivMediumArea>
      <SDivLargeArea
        ref={refTextLarge}
        onMouseEnter={() => animation(refTextLarge.current)}
        onMouseMove={(e) => e.stopPropagation()}
        onTouchMove={(e) => {
          animation(refTextLarge.current);
          e.stopPropagation();
        }}
      >
        <p>見たなぁ</p>
      </SDivLargeArea>
      <SDivMainArea ref={refTextMain}>
        <p>見たなぁ</p>
      </SDivMainArea>
      <SDivLight ref={refLightCursor} />
    </SSection>
  );
};

const SSection = styled.section`
  position: relative;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
  cursor: none;
  p {
    color: ${color.bloodColor2};
  }
`;

const SDivLight = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background: #222;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: inset 0px 0px 20px rgba(191, 188, 142, 0.5);
  z-index: 100;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 180px;
    height: 180px;
    background: radial-gradient(
      ellipse at center,
      rgba(191, 188, 142, 1) 40%,
      rgba(191, 188, 142, 0) 80%
    );
  }
`;

const SDivSmallArea = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 20%;
  left: 15%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.1;
`;
const SDivMediumArea = styled.div`
  position: absolute;
  top: 60%;
  left: 70%;
  width: 200px;
  height: 200px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.1;
`;
const SDivLargeArea = styled.div`
  position: absolute;
  top: 80%;
  left: 10%;
  width: 200px;
  height: 200px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.1;
`;
const SDivMainArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0.1;
`;
