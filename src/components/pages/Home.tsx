import React, { useContext, memo } from "react";
import type { FC } from "react";

import { HomeSwitchContext } from "../../providers/HomeSwitchProvider";
import { Header } from "../templates/Header";
import { PureHome } from "./Home/PureHome";
import { HomeAnimation1 } from "./Home/HomeAnimation1";
import { HomeAnimation2 } from "./Home/HomeAnimation2";
import { HomeAnimation3 } from "./Home/HomeAnimation3";

export const Home: FC = memo(() => {
  const { switchNumber } = useContext(HomeSwitchContext);
  return (
    <>
      {switchNumber === 0 && <HomeAnimation1 />}
      {switchNumber === 1 && <HomeAnimation2 />}
      {switchNumber === 2 && <HomeAnimation3 />}
      {switchNumber === 3 && (
        <>
          <Header />
          <PureHome />
        </>
      )}
    </>
  );
});
