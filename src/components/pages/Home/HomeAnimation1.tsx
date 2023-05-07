import React, { memo, useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { RoughEase } from "gsap/EasePack";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import styled from "styled-components";
import { useSound } from "../../../hooks/useSound";

import { color, defaultFont, mixin } from "../../../style/foundations/mixin";
import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const HomeAnimation1: React.FC = memo(() => {
  const { setSwitchNumber } = useContext(HomeSwitchContext);
  const refBox = useRef<HTMLDivElement>(null!);
  const { playSound } = useSound("/public/music/nigasanai.wav");

  useEffect(() => {
    const box = refBox.current;
    // const tl = gsap.timeline({ repeat: 0, delay: 2 });
    // console.log(tl);
    gsap.from(box, {
      y: 30,
      opacity: 0,
      duration: 2,
    });
  }, []);

  const onClickAnimation = async () => {
    const box = refBox.current;
    const tl = gsap.timeline();
    void playSound();
    tl.to(box, {
      delay: 3.5,
      duration: 0.1,
      yoyo: true,
      repeat: 10,
      x: () => Math.random() * 500 - 5,
      y: () => Math.random() * 500 - 5,
      ease: RoughEase.ease.config({ strength: 8, points: 20 }),
      onComplete: () => {
        console.log("完了")
        setTimeout(() => {
          setSwitchNumber(1);
        }, 1000);
      },
    });
  };

  return (
    <SPositonDiv>
      <SContanerDiv ref={refBox}>
        <SSVGDiv>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M505.095,407.125L300.77,53.208c-9.206-15.944-26.361-25.849-44.774-25.849   c-18.412,0-35.552,9.905-44.751,25.849L6.905,407.109c-9.206,15.944-9.206,35.746,0,51.69   c9.206,15.944,26.354,25.842,44.758,25.842h408.674c18.405,0,35.568-9.897,44.759-25.842   C514.302,442.855,514.302,423.053,505.095,407.125z M256.004,426.437c-17.668,0-32.013-14.33-32.013-32.004   c0-17.668,14.345-31.997,32.013-31.997c17.667,0,31.997,14.329,31.997,31.997C288.001,412.108,273.671,426.437,256.004,426.437z    M275.72,324.011c0,10.89-8.834,19.709-19.716,19.709c-10.898,0-19.717-8.818-19.717-19.709l-12.296-144.724   c0-17.676,14.345-32.005,32.013-32.005c17.667,0,31.997,14.33,31.997,32.005L275.72,324.011z" />
            </g>
          </svg>
        </SSVGDiv>
        <STextDiv>
          <p>この先、恐怖を与える表現が含まれています。</p>
          <p>
            小さいお子様や心臓の弱い方、ホラーが苦手な方はスキップボタンを押して下さい。
          </p>
        </STextDiv>
        <SButtonDiv>
          <button onClick={onClickAnimation}>進む</button>
          <button onClick={() => setSwitchNumber(1)}>SKIP</button>
        </SButtonDiv>
      </SContanerDiv>
    </SPositonDiv>
  );
});

const SPositonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

const SContanerDiv = styled.div`
  border: solid 3px;
  border-color: ${color.bloodColor1};
  border-radius: 24px;
  width: 80%;
  height: 36%;
  min-height: 480px;
  padding: 16px;
  box-shadow: 10px 9px 12px 0px ${color.bloodColor1};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  ${mixin.tabletScreen()} {
    width: 40%;
    min-width: 400px;
    height: 50%;
    min-height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 0.4fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    place-items: center;
    gap: 0px;
  }
`;

const SSVGDiv = styled.div`
  width: 100px;
  height: 100px;
  ${mixin.tabletScreen()} {
    grid-area: 1 / 1 / 2 / 2;
  }
  svg {
  }
  path {
    fill: ${color.bloodColor1};
  }
`;

const STextDiv = styled.div`
  ${mixin.tabletScreen()} {
    grid-area: 1 / 2 / 2 / 4;
  }
`;

const SButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${mixin.tabletScreen()} {
    grid-area: 2 / 1 / 3 / 4;
    flex-direction: row;
    gap: 50px;
  }
  button {
    background-color: ${color.bloodColor1};
    border-radius: 8px;
    width: 150px;
    height: 56px;
    padding: 8px 0;
    ${defaultFont}
    font-size: 24px;
    border: none;
    border-bottom: rgb(${color.bloodColor1});
    cursor: pointer;
    &:active {
      transform: translate(0, 2px);
      border-bottom: none;
    }
  }
`;

// const ary: string | number | HTMLAreaElement[] = [...Array(100)];

// {/* {ary.map((el, index) => (
//           <div
//             key={index}
//             style={{
//               width: "10px",
//               height: "10px",
//               background: "red",
//               margin: "5px",
//               display: "inline-block",
//             }}
//             className="rect"
//           ></div>
//         ))} */}

// gsap.from(".rect", {
//   y: "100vh",
//   duration: 2,
//   ease: "bounce.out",
//   stagger: {
//     each: 0.01, // ばらす間隔（秒）
//     from: "random", // ランダムに開始
//   },
// });
