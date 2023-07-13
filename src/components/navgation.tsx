import React from 'react'
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import TogleBtn from "../components/themBtn";

const NavItem = () => {
  const { data: session } = useSession();
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <a className="text-500-red" href="#">
            Home
          </a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.signup}>
          <TogleBtn />
          {session && session.user ? (
            <>
              <h2>{session.user.email}</h2>
              <button onClick={() => signOut()}>Sign out</button>
            </>
          ) : (
            <>
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </div>
      </nav>
  )
}

export default NavItem