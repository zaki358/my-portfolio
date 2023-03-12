import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navgation } from "./Navgation";
import { Title } from "./Title";


export const Header = () => {
  return (
    <>
      <SHeader>
        <Title />
        <Navgation />
      </SHeader>
      <Outlet />
    </>
  );
};

const SHeader = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
