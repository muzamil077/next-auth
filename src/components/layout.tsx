import React from "react";
import { useSession } from "next-auth/react";
import NavItem from "./navgation";
import Footer from "./footer";
import Home from "./home";

const Layout = ({ children }: any) => {
  const { data: session } = useSession();
  console.log(children, "children");
  return (
    <>
      <NavItem />
      {session && session.user ? <main>{children}</main> : <Home />}
      <Footer />
    </>
  );
};

export default Layout;
