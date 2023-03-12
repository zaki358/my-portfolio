import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const ImagHome = () => {
  const { setSwitchNumber } = useContext(HomeSwitchContext);

  useEffect(() => {
    setTimeout(() => {
      setSwitchNumber(2);
    }, 1000);
  }, []);

  return (
    <SSection>
      <div>ImagHome</div>
    </SSection>
  );
};

const SSection = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background-color: aqua;
`;
