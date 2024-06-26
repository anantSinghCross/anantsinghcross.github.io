import React from "react";
import myPic from "/mypic.JPG";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbMailbox } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

function Landing() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col sm:flex-row gap-2 w-max h-max p-10 m-2 rounded-3xl bg-gradient-to-tr from from-gray-900 via-zinc-900 to-zinc-800 text-zinc-400 shadow-2xl border-t-2 border-zinc-700">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <img
            className="w-24 h-24 rounded-full hover:ring hover:ring-teal-300"
            src={myPic}
            alt="My Pic"
          />
          <p className=" text-sm">React Developer</p>
          <h1 className="text-white font-mono text-4xl">Anant Singh</h1>
          <p className="text-zinc-400 max-w-96">
            Seasoned React developer with 4 years of experience in crafting high-performance,
            user-friendly web applications.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col gap-4 flex-wrap py-4 sm:py-0">
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-t border-t-2 border-blue-300 from-blue-800 to-blue-500 shadow-lg shadow-blue-950 text-zinc-200 text-center hover:scale-105 hover:shadow-blue-900 transition-all"
            href="https://www.linkedin.com/in/anantsinghcross/"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <FaLinkedinIn size={20} />
              <p>LinkedIn</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-t border-t-2 border-pink-300 from-pink-800 to-pink-500 shadow-lg shadow-pink-950 text-zinc-200 text-center hover:scale-105 hover:shadow-pink-900 transition-all"
            href="https://www.instagram.com/oregano.seasoning/"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <BsInstagram size={20} />
              <p>Instagram</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-t border-t-2 border-green-300 from-green-800 to-green-500 shadow-lg shadow-green-950 text-zinc-200 text-center hover:scale-105 hover:shadow-green-900 transition-all"
            href="https://github.com/anantSinghCross"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <FiGithub size={20} />
              <p>GitHub</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-t border-t-2 border-neutral-300 from-neutral-800 to-neutral-500 shadow-lg shadow-neutral-950 text-zinc-200 text-center hover:scale-105 hover:shadow-neutral-900 transition-all"
            href="mailto:anantsingh.cse@gmail.com"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <TbMailbox size={20} />
              <p>Email</p>
            </span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 sm:bottom-5 animate-bounce text-zinc-500">
        <BsArrowDown size={25} />
      </div>
    </div>
  );
}

export default Landing;
