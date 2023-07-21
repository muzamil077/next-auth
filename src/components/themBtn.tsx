import { useTheme } from "next-themes";
import React, { ReactNode, useState } from "react";


interface themBtnProps {
  light: ReactNode | undefined,
  dark: ReactNode | undefined,
}

const TogleBtn = ({ light, dark }: themBtnProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" border-1 rounded-lg  px-2 py-1">
      {theme == "dark" ? (
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {light}
        </button>
      ) : (
        <button onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
          {dark}
        </button>
      )}
    </div>
  );
};

export default TogleBtn;
