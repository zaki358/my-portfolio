import React, { useContext } from "react";
import styled from "styled-components";

import { HomeSwitchContext } from "../../../providers/HomeSwitchProvider";

export const PureHome = () => {
  const { switchNumber, setSwitchNumber } = useContext(HomeSwitchContext);
  return (
    <SSection>
      <div>PureHome</div>
    
    </SSection>
  );
};

const SSection = styled.section`
  padding-top: 60px;
`
