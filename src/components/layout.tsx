import React from "react";
import { useSession } from "next-auth/react";
import NavItem from "./navgation";

const Layout = ({ children }: any) => {
  const { data: session } = useSession();
  console.log(children, "children");
  return (
    <>
      <NavItem />
      {session && session.user ? (
        <main>{children}</main>
      ) : (
        <>
          <h2>Account</h2>
          <p>You need to sign in to access the books</p>
        </>
      )}
      <h2>FOOTER</h2>
    </>
  );
};

export default Layout;
