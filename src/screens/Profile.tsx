import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ArchiveRestore,
  Camera,
  DatabaseBackup,
  Languages,
  ListRestart,
  LogIn,
  Moon,
} from "lucide-react";
import { Pencil } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { black_fn } from "../constants";
import Button from "../component/Button";

export default function Profile() {
  let nav = useNavigate();
  const [name, setName] = useState("Ananta Karmakar");
  const [popup, setPopup] = useState(false) as any;
  const Cam = () => {
    return <Camera size={48} fill="red" />;
  };

  const [number, setNumber] = useState(9800211400);
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
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="flex justify-center items-center mb-6 ">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/98962215?v=4"
            alt=""
            className="rounded-full w-36"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-xl font-semibold">{name}</div>
            <div className=" text-sm opacity-50 font-medium"> +91 {number}</div>
          </div>
        </div>
      </div>

      <div className="py-4 space-y-5">
        <div>
          <div className="p-2 text-sm opacity-40 font-medium">Account</div>
          <div className="bg-white/5 px-6 py-6 rounded-2xl space-y-5">
            <GetOptions
              option="Edit Profile"
              icon={<Pencil size={18} />}
              onClick={() => {
                nav("/profile/edit");
              }}
            />
            <GetOptions
              option="Log Out"
              subText="Log Out"
              opcColor="text-accent font-normal"
              icon={<LogIn size={18} />}
            />
          </div>
        </div>
        <div>
          <div className="p-2 text-sm opacity-40 font-medium">System</div>
          <div className="bg-white/5 px-6 py-6 rounded-2xl space-y-5">
            <GetOptions
              option="Dark Mode"
              subText="Auto"
              icon={<Moon size={18} />}
            />
            <GetOptions
              option="Language"
              subText="English"
              icon={<Languages size={18} />}
            />
          </div>
        </div>
        <div>
          <div className="p-2 text-sm opacity-40 font-medium">Data</div>
          <div className="bg-white/5 px-6 py-6 rounded-2xl space-y-5">
            <GetOptions option="Back Up " icon={<DatabaseBackup size={18} />} />
            <GetOptions option="Restore" icon={<ArchiveRestore size={18} />} />
            <GetOptions
              option="Reset"
              opcColor="text-accent"
              icon={<ListRestart size={18} />}
              onClick={() => {
                setPopup(true);
              }}
            />
          </div>
        </div>
      </div>
      {popup ? (
        <>
          <div
            className="bg-transparent h-full w-full fixed top-0 left-0 backdrop-blur-md"
            onClick={() => {
              setPopup(!popup);
            }}
          ></div>
          <div className="fixed bottom-2 bg-slate-900/50 border-2 border-white/5 pt-8 pb-6 px-4 backdrop-blur-md rounded-3xl object-none w-[92%] space-y-6 ">
            <div className="text-xl font-semibold text-center   ">
              Do you want to Clear Your Bill History?{" "}
            </div>
            <div className="p-2 opacity-50 text-center text-sm">
              This will clear all your bill history and you will not be able to
              recover it.
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Button
                text="No"
                onClick={() => {
                  setPopup(!popup);
                }}
              />
              <Button
                text="Huu"
                onClick={() => {
                  localStorage.clear();
                  setPopup(!popup);
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div>
        <div className="text-sm font-bold opacity-30 pt-10 flex justify-center">
          Made by Antu
        </div>
      </div>
    </div>
  );
}

function GetOptions({
  option = "Option",
  opcColor = "",
  subText = "",
  icon = <Pencil size={18} />,
  arrow = <ChevronRight size={24} />,
  onClick = black_fn,
}: {
  option?: string;
  opcColor?: string;
  subText?: string;
  icon?: any;
  arrow?: any;
  onClick?: any;
}) {
  return (
    <div className="flex justify-between items-center tap99 " onClick={onClick}>
      <div className="flex items-center gap-4">
        {icon}
        <div className={`text-sm  ${opcColor}`}>{option}</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-xs opacity-40 font-medium">{subText}</div>
        {arrow}
      </div>
    </div>
  );
}

function editName() {
  return <div className="fixed bg-blue-500 w-full h-full"></div>;
}
