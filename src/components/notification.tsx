import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Notification = () => {
  return (
    <div className="relative    ">
      <div className=" rounded-full">
        <span className="absolute left-6 top-0 h-5  w-5  text-sm text-red-500 font-extrabold ">
          12
        </span>
      </div>
      <div className="p-2">
        <IoIosNotifications />
      </div>
    </div>
  );
};

export default Notification;
