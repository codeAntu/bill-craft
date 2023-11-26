import { black_fn } from "../constants";
import Button from "./Button";

export default function PopUp({
  text = "Text",
  subText = "",
  butTex1 = "Button 1",
  butTex2 = "Button 2",
  onClick1 = () => {},
  onClick2 = () => {},
}: {
  text: string;
  subText: string;
  butTex1: string;
  butTex2: string;
  onClick1: () => void;
  onClick2: () => void;
}) {
  return (
    <div className="fixed bottom-2 bg-slate-900/50 border-2 border-white/5 pt-8 pb-6 px-4 backdrop-blur-md rounded-3xl object-none w-[92%] space-y-6 ">
      <div className="text-xl font-semibold text-center   ">{text}</div>
      <div className="p-2 opacity-50 text-center text-sm">{subText}</div>
      <div className="grid grid-cols-2 gap-5">
        <Button text={butTex1} onClick={onClick1} />
        <Button text={butTex2} onClick={onClick2} />
      </div>
    </div>
  );
}
