import gsap from "gsap";
import { TextPlugin, CustomEase } from "gsap/all";

export const gsapTextAnimation = (
  text: string,
  text2: string,
  callback: () => void
): void => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(CustomEase);
  CustomEase.create(
    "custom",
    "M0,0 C0.266,0.412 0.144,0.594 0.516,0.814 0.67,0.905 0.78,1 1,1 "
  );
  const tl = gsap.timeline({ repeat: 0, delay: 2 });
  // console.log(tl)
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
      callback();
    },
  });
};

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
