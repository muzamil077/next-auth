import React, { useState } from "react";
import { useSession } from "next-auth/react";
import NavItem from "./navgation";
import Footer from "./footer";
import Home from "./home";
import SigInMOdel from "./signIn";

const Layout = ({ children }: any) => {
  const [open, setOpen] = useState(true);
  const { data: session } = useSession();
  console.log(children, "children");
  return (
    <>
      <NavItem />
      {session && session.user ? (
        <main>{children}</main>
      ) : (
        <>
          <Home />
          <SigInMOdel  />
        </>
      )}
      <Footer />
    </>
  );
};

export default Layout;
