import { black_fn } from "../constants";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import ToggleSwitch from "../component/ToggleSwitch";
import PopUp from "../component/PopUp";

export default function Profile() {
  let nav = useNavigate();

  function goBack() {
    nav(-1);
  }

  return (
    <div className="bg-black text-white p-5 h-dvh">
      <div className="flex gap-2 items-center pb-3">
        <img
          src="./icons/back.svg"
          alt=""
          className="invert h-6  aspect-square"
          onClick={goBack}
        />
        <h1 className="text-2xl font-bold  ">Profile</h1>
      </div>
      <div className="flex items-center justify-center bg-white/5 border border-white/5 py-6 rounded-2xl my-5">
        <div className=" flex flex-col justify-center items-center gap-4 ">
          <img
            src="https://avatars.githubusercontent.com/u/98962215?v=4"
            alt=""
            className=" rounded-full h-24  aspect-square"
          />
          <h1 className="text-xl font-bold ">Ananta Karmakar</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-4 ">
        <div className="flex justify-between items-center p-3  rounded-lg bg-white/5 border-white/10 ">
          <div className="flex items-center gap-3  ">
            <img
              src="./icons/theme.svg"
              alt=""
              className="w-6 aspect-square invert"
            />
            <div className="text-lg font-medium opacity-75">Theme</div>
          </div>
          <div>
            <ToggleSwitch />
          </div>
        </div>
        <GetOptions
          text="BackUp & Restore"
          img="./icons/backup.svg"
          onClick={() => {
            alert("Them");
          }}
        />

        <GetOptions
          text="Reset"
          img="./icons/reset.svg"
          onClick={() => {
            localStorage.clear();
            alert("All data has been reset");
          }}
        />

        <GetOptions
          text="Total"
          img="./icons/total.svg"
          onClick={() => {
            alert("Them");
          }}
        />
        <GetOptions
          text="About"
          img="./icons/about.svg"
          onClick={() => {
            alert("Them");
          }}
        />
        {/* feedback  */}
        <GetOptions text="Feedback" img="./icons/feedback.svg" />
      </div>
      <div>
        <div className="text-sm font-bold opacity-30 pt-10 flex justify-center">
          Made by Antu
        </div>
      </div>
    </div>
  );
}

function GetOptions({
  text = "text",
  img = "link",
  onClick = black_fn,
}: {
  text?: string;
  img?: string;
  onClick?: any;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white/5 border-white/10 p-3 flex items-center gap-3 rounded-lg "
    >
      {onClick}
      <img src={img} alt="" className="w-6 aspect-square invert" />
      <div className="text-lg font-medium opacity-75">{text}</div>
    </div>
  );
}
