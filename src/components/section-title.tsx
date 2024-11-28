import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2
      className="section-title text-7xl max-[1600px]:text-5xl max-[1000px]:text-4xl"
      style={josefinSans.style}
    >
      {text}
    </h2>
  );
}
