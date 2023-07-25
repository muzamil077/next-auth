import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="relative bg-[#48C8F4] h-32 sm:h-32 md:h-44 lg:h-52 w-[67%] m-auto mt-2">
        <div className="absolute top-24 left-5">
          <i className="h-32 w-32 text-[50px] sm:text-[50px]  md:text-[100px] lg:text-[150px]">
            <CgProfile />
          </i>
        </div>
      </div>
      <div className="border-2 border-gray-500 h-24 w-[67%] m-auto">
        <div className="flex mt-7 items-center justify-between px-6 ">
          <div>
            <h2 className=" text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px]">
              {session?.user?.name}
            </h2>
          </div>
          <div>
            <button
              onClick={() => router.push("/Settings")}
              className="bg-[#48C8F4] py-1 sm:py-1 md:py-1 lg:py-2  px-2 sm:px-3 md:px-5 rounded-md"
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
