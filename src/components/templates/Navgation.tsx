import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export const Navgation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <SUnorderedList>
        <SList onClick={() => navigate("/")}>Home</SList>
        <SList onClick={() => navigate("/about")}>About</SList>
        <SList onClick={() => navigate("/skill")}>Skill</SList>
        <SList onClick={() => navigate("/portfolio")}>Portfolio</SList>
        <SList onClick={() => navigate("/contact")}>Contact</SList>
      </SUnorderedList>
    </nav>
  );
};

const SUnorderedList = styled.ul`
  display: flex;
  align-items: center;
`

const SList = styled.li`
  cursor: pointer;
  padding: 10px 20px;
  height: 100%;
`
