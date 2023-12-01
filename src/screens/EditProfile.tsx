import React from "react";
import Profile from "./Profile";

export default function EditProfile() {
  return (
    <div className="bg-black text-white p-5 h-dvh">
      <div className="flex justify-center items-center mb-6 ">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/98962215?v=4"
            alt=""
            className="rounded-full w-36"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div>A</div>
            <div className=" text-sm opacity-50 font-medium"> +91 </div>
          </div>
        </div>
      </div>
    </div>
  );
}
