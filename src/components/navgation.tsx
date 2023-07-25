import React, { useContext, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import TogleBtn from "../components/themBtn";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { CgLogOut } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { TbMessage } from "react-icons/tb";
import { BiSolidMoon } from "react-icons/bi";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { SlMenu } from "react-icons/sl";
import Notification from "./notification";
import { myContext } from "@/pages/_app";
// import SigInMOdel from "./signIn";

const mainNavItems = [
  { url: "/", label: "Home" },
  { url: "/About", label: "About" },
  { url: "/Blog", label: "Blog" },
  { url: "/Projects", label: "Projects" },
  { url: "/Dashboard", label: "Dashboard" },
];
const ProfileItem = [
  { URL: "/Profile    ", label: "Profile", icon: <CgProfile /> },
  { URL: "#2", label: "Setting", icon: <CiSettings /> },
  { URL: "#3", label: "Logout", icon: <CgLogOut /> },
];

const NavItem = () => {
  const { data: session } = useSession();
  const [openn, setOpenn] = useState(false);
  const { theme, setTheme } = useTheme();
  const { open, setOpen } = useContext(myContext);

  const handelOpen = () => {
    setOpenn(!openn);
  };

  return (
    <nav className="flex dark:bg-[#0B141D] border-b-2 justify-around py-6 ">
      <div className="flex items-center">
        <div className="hidden md:block mt-2">
          <div className="flex items-center gap-10">
            {mainNavItems.map((item, index) => (
              <div key={item.label} className="">
                <Link href={item.url}>
                  <li className="list-none">{item.label}</li>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2 md:hidden block text-xl">
          <SlMenu />
        </div>
      </div>
      <div className="flex gap-5">
        <div>
          {session && session.user ? (
            <>
              <div className="flex gap-5 items-center cursor-pointer">
                <div className="text-2xl ">
                  <Notification />
                </div>
                <div className="text-2xl">
                  <TbMessage />
                </div>
                <h2 onClick={handelOpen} className="cursor-pointer text-lg">
                  {session.user.name}
                </h2>
              </div>

              {open && (
                <div className="absolute sm:right-[260px] top-13 bg-[aliceblue] dark:bg-[#0B141D]    z-10 mt-2 w-48 origin-top-right border-1 dark:border-white-500 p-5 rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {ProfileItem.map((item, index) => (
                    <div
                      key={item.label}
                      onClick={() => (item.label == "Logout" ? signOut() : "")}
                      className="flex gap-3 items-center  py-3"
                    >
                      <Link href={item.URL}>
                        <div className="flex gap-3 items-center  py-3">
                          <div>
                            <i className="text-xl cursor-pointer">
                              {item.icon}
                            </i>
                          </div>
                          <div>
                            <h2
                              onClick={() =>
                                item.label == "Profile" ? setOpen(false) : ""
                              }
                              className="text-md cursor-pointer"
                            >
                              {item.label == "Profile"
                                ? session.user?.name
                                : item.label}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                  <div
                    className={`flex border-2 rounded-lg ${
                      theme === "dark" ? "justify-end" : ""
                    }`}
                  >
                    {theme == "dark" ? (
                      <TogleBtn light={<BsSunFill />} dark={<BiSolidMoon />} />
                    ) : (
                      <TogleBtn light={<BsSunFill />} dark={<BiSolidMoon />} />
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center gap-5 ">
                <div className="mt-1">
                  <TogleBtn light={<BsSunFill />} dark={<BiSolidMoon />} />
                </div>
                <div>
                  <button onClick={() => setOpen(true)} className="">
                    Login
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavItem;
