import { useTheme } from "next-themes";
import {BiSolidMoon} from  "react-icons/bi"
import {BsSunFill} from "react-icons/bs"
import React, { useState } from "react";

const TogleBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme == "dark" ? (
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}><BsSunFill/></button>
      ) : (
        <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}><BiSolidMoon/></button>
      )}
    </>
  );
};

export default TogleBtn;