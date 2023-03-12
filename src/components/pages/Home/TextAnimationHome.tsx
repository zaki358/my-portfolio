import React, { useContext, FC, useEffect } from "react";
import styled from "styled-components";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const TextAnimationHome: FC = () => {
  const { switchNumber, setSwitchNumber } = useContext(HomeSwitchContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSwitchNumber(1);
    }, 5000);
    return () => {
      clearTimeout(timer);
      console.log("消滅");
    };
  }, []);

  const openingSkip = () => setSwitchNumber(2);

  return (
    <SSection>
      <div>TextAnimationHome</div>
      <div>
        <button onClick={openingSkip}>skip</button>
      </div>
    </SSection>
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
