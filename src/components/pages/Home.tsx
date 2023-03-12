import React, { useContext, FC, memo } from "react";
import styled from "styled-components";
import { HomeSwitchContext } from "../../providers/HomeSwitchProvider";
import { ImagHome } from "./Home/ImagHome";
import { PureHome } from "./Home/PureHome";
import { TextAnimationHome } from "./Home/TextAnimationHome";

export const Home: FC = memo(() => {
  const { switchNumber } = useContext(HomeSwitchContext);
  return (
    <>
      {switchNumber === 0 && <TextAnimationHome />}
      {switchNumber === 1 && <ImagHome />}
      {switchNumber === 2 && <PureHome />}
    </>
  );
});

const SSection = styled.section`
  padding-top: 60px;
`;
