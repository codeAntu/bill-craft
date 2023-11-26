import { black_fn } from "../constants";
import ToggleSwitch from "./ToggleSwitch";

export default function Check({
  text = "Text",
  onClick = black_fn,
  color = "bg-[#8866ff]",
}: {
  text?: string;
  onClick?: any;
  color?: string;
}) {
  return (
    <div className="flex justify-between">
      <h1 className="text-base font-medium">{text}</h1>
      <ToggleSwitch onClick={onClick} text={text} color={color} />
    </div>
  );
}
