import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSound } from "../../../hooks/useSound";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";
import { gsapTextAnimation } from "../../../modules/gsapTextAnimation";

//gsapとstrictModdは相性が悪い
//マウントが２回（マウント→アンマウント→マウント）されるとgsapのメソッドの挙動がおかしくなる

export const HomeAnimation2: React.FC = () => {
  const { setSwitchNumber } = useContext(HomeSwitchContext);
  const refText = useRef<HTMLDivElement>(null!);
  const refText2 = useRef<HTMLDivElement>(null!);
  const { playSound } = useSound("/public/music/noise2.mp3");

  useEffect(() => {
    const text = refText.current.innerHTML;
    const text2 = refText2.current.innerHTML;
    refText.current.innerHTML = "";
    refText2.current.innerHTML = "";
    gsapTextAnimation(text, text2, openingSkip);
  }, []);

  const openingSkip = () => {
    void playSound();
    setTimeout(() => {
      void playSound(false);
      //setSwitchNumber(2);
    }, 2000);
  };
  return (
    <SSection>
      <SPositonDiv>
        <p className="text1" ref={refText}>
          当サイトへお越し頂きありがとうございます。
          <br />
          どうぞごゆっくり閲覧して下さい。
          <br />
          えっ！？見たくない。なんで
          <br />
          どうしてなの・・・
        </p>
        <p className="text2 text-left" ref={refText2}>
          許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ許サナイ險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔險ｱ縺輔
        </p>
      </SPositonDiv>
      {/* <button onClick={openingSkip}>skip</button> */}
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
