import { black_fn } from "../constants";
import emoji from "emoji-store";

export default function Button({
  text = "Sample Button",
  onClick = black_fn,
  color = "bg-accent",
}: {
  text?: string;
  onClick?: any;
  color?: string;
}) {
  return (
    <button
      className="highlight-transparent tap99 w-full select-none rounded-xl bg-accent p-4 text-sm font-medium text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
