import React, { useContext, FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { TextPlugin, CustomEase } from "gsap/all";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

//gsapとstrictModdは相性が悪い
//マウントが２回（マウント→アンマウント→マウント）されるとgsapのメソッドの挙動がおかしくなる

export const TextAnimationHome: FC = () => {
  const { switchNumber, setSwitchNumber } = useContext(HomeSwitchContext);

  const refText = useRef<HTMLDivElement>(null!);
  const refText2 = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const text = refText.current.innerHTML;
    const text2 = refText2.current.innerHTML;
    refText.current.innerHTML = "";
    refText2.current.innerHTML = "";
    gsapTextAnimation(text, text2);
  }, []);

  const gsapTextAnimation = (text: string, text2: string): void => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
      "custom",
      "M0,0 C0.266,0.412 0.144,0.594 0.516,0.814 0.67,0.905 0.78,1 1,1 "
    );
    const tl = gsap.timeline({ repeat: 0, delay: 2 });
    tl.to(".text1", {
      duration: 8,
      text: { value: text },
      ease: "custom",
    });
    tl.to(".text2", {
      duration: 2,
      text: { value: text2 },
      ease: "none",
      onComplete: () => {
        // setSwitchNumber(1);
      },
    });
  };

  const openingSkip = () => setSwitchNumber(2);
  return (
    <SSection>
      <SPositonDiv>
        <p className="text1" ref={refText}>
          ねぇ僕のWebサイト見てよ
          <br />
          えっ！？見たくない？
          <br />
          なんで・・・
          <br />
          見てくれるって言ったじゃん。嘘つき
        </p>
        <p className="text2 text-left" ref={refText2}>
          嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき<span>ああああ</span>
        </p>
        {/* <p>嘘つき</p> */}
      </SPositonDiv>
      <button onClick={openingSkip}>skip</button>
    </SSection>
  );
};

const SSection = styled.section`
  position: relative;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: black;
`;

const SPositonDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
  .text-left {
    text-align: left;
  }
`;

//gsapメモ
// const tl = gsap.timeline({
//   repeat: -1, //無限に繰り返す
//   delay: delayTime, //アニメーション間で待機時間を作る
//   defaults: {
//     //timelineでのデフォルトを作成
//     duration: durationTime, //アニメーション時間を設定
//     ease: "power1.out", //アニメーションの緩急を設定
//   },
// });

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setSwitchNumber(1);
//   }, 10000);
//   return () => {
//     clearTimeout(timer);
//     console.log("消滅");
//   };
// }, []);
