import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="section-title" style={josefinSans.style}>
      {text}
    </h2>
  );
}
