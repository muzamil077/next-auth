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
      <div className="relative bg-[#48C8F4] h-52 w-[67%] m-auto mt-2">
        <div className="absolute top-24 left-5">
          <i className="h-32 w-32 text-[150px]">
            <CgProfile />
          </i>
          <div className="flex items-center gap-[680px]">
            <div>
              <h2 className="text-[30px]">{session?.user?.name}</h2>
            </div>
            <div>
              <button
                onClick={() => router.push("/Settings")}
                className="bg-[#48C8F4] py-2 px-5 rounded-md"
              >
                Edit profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-gray-500 h-24 w-[67%] m-auto"></div>
    </div>
  );
};

export default Profile;
