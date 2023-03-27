import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative justify-center">
      <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2
            id="resume"
            className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font"
          >
            My Resume
          </h2>
          <img src="./resume.png" alt="Resume"></img>
          <p className="text-gray-400 text-base mb-4">
            Download my resume here:
          </p>
          <a
            href="./Resume.pdf"
            className="text-indigo-500 inline-flex items-center"
            download
          >
            Download
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <form
          netlify
          name="contact"
          className="md:w-1/2 flex flex-col md:ml-auto w-full md:py-8"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font ">
            Contact Me
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
