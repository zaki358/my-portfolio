import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";
import { gsapTextAnimation } from "../../../modules/gsapTextAnimation";

//gsapとstrictModdは相性が悪い
//マウントが２回（マウント→アンマウント→マウント）されるとgsapのメソッドの挙動がおかしくなる

export const HomeAnimation2: React.FC = () => {

  const { setSwitchNumber } = useContext(HomeSwitchContext);
  const refText = useRef<HTMLDivElement>(null!);
  const refText2 = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const text = refText.current.innerHTML;
    const text2 = refText2.current.innerHTML;
    refText.current.innerHTML = "";
    refText2.current.innerHTML = "";
    gsapTextAnimation(text, text2, () => setSwitchNumber(2));
  }, []);

  const openingSkip = () => setSwitchNumber(3);
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
          嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき嘘つき
          <span>ああああ</span>
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

