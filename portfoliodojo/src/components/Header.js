import React from "react";

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
          {/* <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Student",
              1000,
              "Full Stack Developer",
              1000,
              "Designer",
              1000,
              "Mediocre Golfer",
              1000,
            ]}
          /> */}
        </p>
      </div>
    </header>
  );
}
