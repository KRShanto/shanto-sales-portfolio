import React from "react";
import Section from "../section";
import { WavyBackground } from "../ui/wavy-background";
import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function Friends() {
  return (
    <Section className="relative w-full max-[900px]:w-[100vw]" id="friends">
      <WavyBackground className="pb-40" waveWidth={40}>
        <h2 className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
          Meet My Friends and Teammates
        </h2>
        <p className="inter-var mt-4 text-center text-lg font-normal text-white md:text-lg">
          Obviously, I can&apos;t do everything alone. I have a team of friends
          and teammates who help me to build amazing products.
        </p>

        <div className="my-10 flex w-full flex-row items-center justify-center">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </Section>
  );
}

const people = [
  {
    id: 1,
    name: "Nayem Khan",
    designation: "Video Editor",
    image:
      "https://media.licdn.com/dms/image/sync/v2/D5627AQGJuR_TUok2cg/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1731173618759?e=1732428000&v=beta&t=ZOORXG1B8kryY6IopsqtU2vTwpHdzGBOLzQFx_3uQVU",
    link: "https://www.linkedin.com/in/nayem-khan-74880a2b0/",
  },
  {
    id: 2,
    name: "Aamir Mohammed Zobayer",
    designation: "Founder & CEO",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHclDudeKkExw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667307294610?e=1737590400&v=beta&t=oFzR93nnq9bnIG--YCkm27jS_W2KmcR5rhmQiHxC-9Q",
    link: "https://www.linkedin.com/in/aamir-mz/",
  },
  {
    id: 3,
    name: "Samir Hasan",
    designation: "Digital Marketing Strategist",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEpvSGw-QJQjg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1680464148265?e=1737590400&v=beta&t=Kwqtv7mfaGRKde3suVuCuGkaN36cFjlQ0c-7s3E1q-0",
    link: "https://www.linkedin.com/in/samir-hasan-18048524a/",
  },
  {
    id: 4,
    name: "Md. Rasel Mahmud",
    designation: "MERN Stack Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH3eGgv5xW3iw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689879284555?e=1737590400&v=beta&t=wXeJUaPVQJ3MGBMebLEReeOAHw1d1-WIZOTRNf4JbpU",
    link: "https://www.linkedin.com/in/mdraselmahmuddev/",
  },
  {
    id: 5,
    name: "Salman Farshi",
    designation: "WordPress Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQHbb2cZCclGCQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724009138418?e=1737590400&v=beta&t=op_oTeZlUhN5FOp8vbQTQ2bDCK9XUaGVxiVoB6_vTVk",
    link: "https://www.linkedin.com/in/salman-farshi-62b31a322/",
  },
  {
    id: 6,
    name: "Rayhan Mojumdar",
    designation: "Full Stack Developer",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHSB38DCZdVHA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699476651876?e=1737590400&v=beta&t=vDNGlBr6tSW0SnHYahAdqLYH3S1OiCtVIFxc_qwqiD0",
    link: "https://www.linkedin.com/in/rayhanmujumdar/",
  },
];
