import Image from "next/image";
import React from "react";
import Myself from "../../../public/myself/Shanto1.png";

export default function CircleDemo() {
  return (
    <div className="relative">
      <Image
        src={Myself}
        alt="Shanto"
        placeholder="blur"
        className="rounded-full border-8 border-blue-500"
        width={450}
        height={450}
      />
      <svg
        className="absolute -left-28 -top-32"
        id="circle"
        viewBox="0 0 160 160"
        width="660"
        height="660"
      >
        {/* <circle cx="80" cy="80" r="50" /> */}
        <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
          <path
            d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
            fill="#075AFF"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </g>
        {/* <path
        d="M 50,0 A 50,50 0 0,0 -50,0Z"
        transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)"
      /> */}
      </svg>
    </div>
  );
}
