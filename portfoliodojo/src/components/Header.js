import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <header className="text-center">
      <div>
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          {" "}
          Hi, Im Wyatt Domanski
        </h1>
        <p className="text-green-500">
          I am a{" "}
          <TypeAnimation
            sequence={[
              "Designer",
              1000,
              "Full Stack Developer",
              1000,
              "Student",
              1000,

              "Mediocre golfer",
              2000,
              () => {
                console.log("Sequence completed"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "1em", display: "inline-block" }}
          />
        </p>
      </div>
    </header>
  );
}
