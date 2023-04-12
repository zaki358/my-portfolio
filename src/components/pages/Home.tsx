import React, { useContext, memo } from "react";
import type { FC } from "react";

import { HomeSwitchContext } from "../../providers/HomeSwitchProvider";
import { Header } from "../templates/Header";
import { PureHome } from "./Home/PureHome";
import { HomeAnimation1 } from "./Home/HomeAnimation1";
import { HomeAnimation2 } from "./Home/HomeAnimation2";
import { HomeAnimation3 } from "./Home/HomeAnimation3";
import { HomeAnimation4 } from "./Home/HomeAnimation4";

export const Home: FC = memo(() => {
  const { switchNumber } = useContext(HomeSwitchContext);
  return (
    <>
      {switchNumber === 3 && <HomeAnimation1 />}
      {switchNumber === 0 && <HomeAnimation2 />}
      {switchNumber === 2 && <HomeAnimation3 />}
      {switchNumber === 3 && <HomeAnimation4 />}
      {switchNumber === 4 && (
        <>
          <Header />
          <PureHome />
        </>
      )}
    </>
  );
});
