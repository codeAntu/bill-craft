import emoji from "emoji-store";

export default function TextEmoji({ emoji: e = "😍" }) {
  return (
    <img
      src={emoji(e)}
      loading="lazy"
      className="inline-block aspect-square h-[1.2em] align-middle"
    />
  );
}
