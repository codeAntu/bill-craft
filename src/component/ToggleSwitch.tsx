import React from "react";
import { useState } from "react";
import { black_fn } from "../constants";

export default function ToggleSwitch({
  text = "text",
  onClick = black_fn,
  color = "bg-accent",
}: {
  text?: string;
  onClick?: any;
  color?: string;
}) {
  return (
    <div className="">
      <label
        htmlFor={text}
        className="flex h-6 w-10 bg-white/80 rounded-full relative cursor-pointer items-center"
      >
        <input
          type="checkbox"
          id={text}
          className="sr-only peer"
          onClick={onClick}
        />
        <span
          className={`h-4/5 aspect-square  rounded-full absolute ml-[8%] border border-white/10
         peer-checked:ml-[45%] transition-all duration-500  ${color} peer-checked:${color} `}
        ></span>
      </label>
    </div>
  );
}
