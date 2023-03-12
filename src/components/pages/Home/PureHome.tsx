import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, TextPlugin, ScrollTrigger } from "gsap/all";
import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const PureHome = () => {
  const { switchNumber, setSwitchNumber } = useContext(HomeSwitchContext);

  const textRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("h1", { duration: 3, text: "this is a to tween" });
    gsap.from("h2", { duration: 3, text: "" });
  }, []);

  return (
    <SSection>
      <h1></h1>
      <h2>This is a from tween</h2>
    </SSection>
  );
};

const SSection = styled.section`
  padding-top: 60px;
`;
