import { black_fn } from "../constants";
import emoji from "emoji-store";
import TextEmoji from "./TextEmoji";
export default function ButtonBox({
  text = "Sample Button",
  onClick = black_fn,
  color = "bg-accent",
  food = true,
}: {
  text?: string;
  onClick?: any;
  color?: string;
  food?: boolean;
}) {
  return (
    <div>
      <button
        className={`tap99 select-none rounded-xl p-4 text-sm font-medium  w-full text-white  ${
          food ? color : "bg-white/5"
        }`}
        onClick={onClick}
      >
        {text + " "}
        <TextEmoji emoji={food ? "😋" : "😐"} />
      </button>
    </div>
  );
}
