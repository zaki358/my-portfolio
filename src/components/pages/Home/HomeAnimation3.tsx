import React, { useContext, useEffect, useRef, useState } from "react";
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

  const mouseMove = (e: MouseEvent): void => {
    const box = refLightCursor.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to(box, {
      x: mouseX - 100,
      y: mouseY - 100,
    });
  };

  // useEffect(() => {
  //   gsap.set(refLightCursor.current, { xPercent: -50, yPercent: -50 });

  //   const moveMouse = (e: MouseEvent) => {
  //     gsap.to(refLightCursor.current, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.3,
  //     });
  //   };

  //   window.addEventListener("mousemove", moveMouse);

  //   return () => {
  //     window.removeEventListener("mousemove", moveMouse);
  //   };
  // }, []);

  const FadeInLight = (): ((event: MouseEvent, el: HTMLElement) => void) => {
    let count: number = 0;
    const arry = new Set();
    const FadeInText = (event: MouseEvent, el: HTMLElement) => {
      const mainText = refTextMain.current;
      const tl = gsap.timeline({ repeat: 0 });
      if (count === 0 && arry.size === 0) {
        count++;
        arry.add(el);
        tl.to(el, {
          opacity: 1,
          scale: 2,
        });
        tl.to(el, {
          opacity: 0,
        });
      } else if (count === 1) {
        arry.add(el);
        if (arry.size === 2) {
          count++;
          tl.to(el, {
            opacity: 1,
            scale: 3,
          });
          tl.to(el, {
            opacity: 0,
          });
        }
      } else if (count === 2) {
        arry.add(el);
        if (arry.size === 3) {
          count++;
          tl.to(el, {
            opacity: 1,
            scale: 4,
          });
          tl.to(el, {
            opacity: 0,
          });
          tl.to(mainText, {
            delay: 3,
            duration: 5,
            opacity: 1,
            scale: 10,
            onStart: () => {
              void playSound();
            },
          });
        }
      }
    };
    return FadeInText;
  };

  const fadeIn = FadeInLight();

  const moveEvent = (
    e: MouseEvent,
    element: HTMLElement,
    cursor: HTMLElement
  ) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    gsap.to(cursor, {
      x: centerX - 100,
      y: centerY - 100,
    });
    console.log(element);
    e.stopPropagation();
  };

  return (
    <SSection onMouseMove={mouseMove}>
      <SDivSmallArea
        ref={refTextSmall}
        // onMouseOver={(e) => {
        //   fadeIn(e, refTextSmall.current);
        // }}
        onMouseMove={(e) =>
          moveEvent(e, refTextSmall.current, refLightCursor.current)
        }
      >
        <p>見たなぁ</p>
      </SDivSmallArea>
      <SDivMediumArea
        ref={refTextMedium}
        onMouseOver={(e) => {
          fadeIn(e, refTextMedium.current);
        }}
      >
        <p>見たなぁ</p>
      </SDivMediumArea>
      <SDivLargeArea
        ref={refTextLarge}
        onMouseOver={(e) => fadeIn(e, refTextLarge.current)}
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
  /* cursor: none; */
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
  background-color: aqua;
  top: 20%;
  left: 15%;
  z-index: 9999;
  opacity: 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  p {
  }
`;
const SDivMediumArea = styled.div`
  position: absolute;
  top: 60%;
  left: 70%;
  z-index: 10;
  /* opacity: 0; */
`;
const SDivLargeArea = styled.div`
  position: absolute;
  top: 90%;
  left: 10%;
  z-index: 10;
  /* opacity: 0; */
`;
const SDivMainArea = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0;
`;

// //ポインタロック開始
// function ElementRequestPointerLock(element:HTMLElement) {
//   const list: string[] = [
//     "requestPointerLock",
//     "webkitRequestPointerLock",
//     "mozRequestPointerLock",
//   ];
//   let i;
//   const num = list.length;
//   for (i = 0; i < num; i++) {
//     if (element[list[i]]) {
//       element[list[i]]();
//       return true;
//     }
//   }
//   return false;
// }

// //ポインタロック終了
// function DocumentExitPointerLock(document_obj): boolean {
//   const list: string[] = [
//     "exitPointerLock",
//     "webkitExitPointerLock",
//     "mozExitPointerLock",
//   ];
//   let i;
//   const num = list.length;
//   for (i = 0; i < num; i++) {
//     if (document_obj[list[i]]) {
//       document_obj[list[i]]();
//       return true;
//     }
//   }
//   return false;
// }

// el.onmouseenter = function (e) {
//   ElementRequestPointerLock(el);
//   setTimeout(() => {
//     DocumentExitPointerLock(document);
//   }, 5000);
// };

//特定の要素に近づいたらカーソルをゆっくりもしくは止める
// var mouseX = 0, mouseY = 0;
// document.addEventListener("mousemove", function(event) {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
// });

// var targetElement = document.getElementById("target");
// var threshold = 100;

// function animateCursor() {
//   var boundingRect = targetElement.getBoundingClientRect();
//   var distance = Math.sqrt(
//     Math.pow(mouseX - boundingRect.left - boundingRect.width / 2, 2) +
//     Math.pow(mouseY - boundingRect.top - boundingRect.height / 2, 2)
//   );
//   if (distance < threshold) {
//     var scale = 1 - distance / threshold;
//     targetElement.style.transform = "scale(" + scale + ")";
//   } else {
//     targetElement.style.transform = "scale(1)";
//   }
//   requestAnimationFrame(animateCursor);
// }
// animateCursor();

// useEffect(() => {
//   playSound();
// }, []);
// const musicPlay = async () => {
//   const audio = new Audio("../../../../public/music/waraiufufu.wav");
//   await audio.play();
// };

// const sound: Howl = new Howl({
//   src: ["../../../../public/music/waraiufufu.wav"],
// });

// function handleMouseOver() {
//   audioRef.current.play();
//   console.log("music");
// }

// // const targetElement = document.getElementById("targetElement");
// const slowdownThreshold = 100;

// function getTargetElementCenter(targetElement: HTMLElement) {
//   const rect = targetElement.getBoundingClientRect();
//   return {
//     x: rect.left + rect.width / 2,
//     y: rect.top + rect.height / 2,
//   };
// }

// function getDistanceBetweenPoints(
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number
// ) {
//   return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// }

// const move = (
//   event: MouseEvent,
//   callback: (targetElement: HTMLElement) => { x: number; y: number },
//   callback2: (x1: number, y1: number, x2: number, y2: number) => number,
//   elemnt: HTMLElement
// ) => {
//   const customCursor = refLightCursor.current;
//   const { clientX, clientY } = event;
//   const { x: centerX, y: centerY } = callback(elemnt);
//   console.log(elemnt.getBoundingClientRect());
//   const distance = callback2(clientX, clientY, centerX, centerY);

//   if (distance < slowdownThreshold) {
//     const slowdownFactor = distance / slowdownThreshold;
//     const cursorX = centerX + slowdownFactor * (clientX - centerX);
//     const cursorY = centerY + slowdownFactor * (clientY - centerY);
//     gsap.to(customCursor, {
//       x: cursorX - customCursor.offsetWidth / 2,
//       y: cursorY - customCursor.offsetHeight / 2,
//       duration: 0.3,
//     });
//   } else {
//     gsap.to(customCursor, {
//       x: clientX - customCursor.offsetWidth / 2,
//       y: clientY - customCursor.offsetHeight / 2,
//       duration: 0.3,
//     });
//   }
// };
