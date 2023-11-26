import { black_fn } from "../constants";
import emoji from "emoji-store";
import TextEmoji from "./TextEmoji";
export default function ButtonBox({
  text = "Sample Button",
  onClick = black_fn,
  color = "bg-accent",
  shadow = "shadow-accent/40",
  food = true,
}: {
  text?: string;
  onClick?: any;
  color?: string;
  food?: boolean;
  shadow?: string;
}) {
  return (
    <div>
      <button
        className={`tap99 select-none rounded-xl p-4 text-sm font-medium  w-full text-white  ${color} ${
          food ? `shadow-lg ${shadow}` : "opacity-25 "
        }`}
        onClick={onClick}
      >
        {text + " "}
        <TextEmoji emoji={food ? "😋" : "😐"} />
      </button>
    </div>
  );
}
