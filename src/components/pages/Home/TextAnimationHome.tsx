import React, { useContext, FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";
import Component from "../../Index";

export const TextAnimationHome: FC = () => {
  const { switchNumber, setSwitchNumber } = useContext(HomeSwitchContext);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setSwitchNumber(1);
  //   }, 10000);
  //   return () => {
  //     clearTimeout(timer);
  //     console.log("消滅");
  //   };
  // }, []);

  const text = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    //gsapとstrictModdは相性が悪い
    //マウントが２回（マウント→アンマウント→マウント）されるとgsapのメソッドの挙動がおかしくなる
    //
    console.log("efect");
    const a = text.current.innerText;
    text.current.innerHTML = "";
    gsap.registerPlugin(TextPlugin);
    gsap.to("p", { duration: 3, text: a });
    gsap.from("h2", { duration: 3, text: "" });
  }, []);

  const openingSkip = () => setSwitchNumber(2);
  console.log("render");
  return (
    <SSection>
      <p ref={text}>
        鬼に逢うては鬼を斬る <br />
        仏に逢う ては仏を斬る <br />
        剣の理ここにあり
      </p>
      <h2>This is a from tween </h2>

      <div>
        <button onClick={openingSkip}>skip</button>
      </div>
    </SSection>
    // <Component />
  );
};

const SSection = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: blue;
`;
