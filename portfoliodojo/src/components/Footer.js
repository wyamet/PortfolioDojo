import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">Wyatt Domanski</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2023 Wyatt Domanski —{" "}
        </p>
        <div className="ml-auto flex items-center">
          <a href="https://github.com/wyamet" className="mr-3">
            <FaGithub size="2em" />
          </a>
          <a href="https://linkedin.com/in/wyatt-domanski" className="mr-3">
            <FaLinkedin size="2em" />
          </a>
          <a href="https://twitter.com/" className="mr-3">
            <FaTwitter size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
