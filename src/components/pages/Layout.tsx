import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/skill")}>Skill</li>
        <li onClick={() => navigate("/portfolio")}>Portfolio</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>
      <Outlet />
    </>
  );
};
