import { useTheme } from "next-themes";
import {BiSolidMoon} from  "react-icons/bi"
import {BsSunFill} from "react-icons/bs"
import React, { useState } from "react";

const TogleBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mt-1 ">
      {theme == "dark" ? (
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}><BsSunFill/></button>
      ) : (
        <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}><BiSolidMoon/></button>
      )}
    </div>
  );
};

export default TogleBtn;
