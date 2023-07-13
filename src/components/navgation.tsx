import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import TogleBtn from "../components/themBtn";
import Image from "next/image";
import Link from "next/link";
import { icons } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";

const mainNavItems = [
  { url: "/", label: "Home", mobileOnly: true },
  { url: "/me", label: "About" },
  { url: "/blog", label: "Blog" },
  { url: "/projects", label: "Projects" },
  { url: "/illustration", label: "Illustration" },
];
const ProfileItem = [
  { label: "Profile", icon: <CgProfile /> },
  { label: "Setting", icon: <CiSettings /> },
  { label: "Logout", icon: <CgLogOut /> },
];

const NavItem = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handelOpen = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex justify-around mt-6">
      <div className="flex gap-10">
        {mainNavItems.map((item, index) => (
          <div key={item.label} className="">
            <Link href={item.url}>
              <li className="list-none">{item.label}</li>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div>
          <TogleBtn />
        </div>
        <div>
          {session && session.user ? (
            <>
              {/* <Image src={session.user.image} alt={"User's image"} /> */}
              <h2 onClick={handelOpen} className="cursor-pointer">
                {session.user.name}
              </h2>
              {open && (
                <div className="absolute right-[250px]  z-10 mt-2 w-48 origin-top-right border-1 black:border-white-500 p-5 rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {ProfileItem.map((item, index) => (
                    <div
                      key={item.label}
                      onClick={() => (item.label == "Logout" ? signOut() : "")}
                      className="flex gap-3 items-center   py-3"
                    >
                      <div>
                        <i className="text-xl cursor-pointer">{item.icon}</i>
                      </div>
                      <div>
                        <h2 className="text-md cursor-pointer">{item.label}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <button onClick={() => signIn()}>Login</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavItem;
