import { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  section: string;
};

const TextAnimation = (props: Props): ReactElement => {
  const aaa = (node: any) => {
    console.log(props.section);
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      const height = node.clientHeight; //高さを取得する
      node.innerHTML = ""; //テキストを削除する
      node.style.height = height + "px"; //高さを設定する
      console.log("通貨");
      //setAnimation(text);
    }
  };

  const setAnimation = (text: string) => {
    const numText = text.length;
    const selector = "#" + props.section;

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * 0.03,
      text: {
        value: text,
      },
      ease: "none",
      scrollTrigger: {
        trigger: selector,
        start: "top 40%",
        end: "bottom 40%",
      },
    });
  };

  return (
    <>
      <p className="animation-text">{props.children}</p>
      <button onClick={() => console.log("textRef")}>aaa</button>
    </>
  );
};

export default TextAnimation;
