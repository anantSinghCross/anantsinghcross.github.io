import React from "react";
import myPic from "/mypic.JPG";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbMailbox } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";

function Landing() {
  return (
    <div className="flex justify-center w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row gap-2 w-max h-max p-10 bg-white">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <img
            className="w-24 h-24 rounded-full"
            src={myPic}
            alt="My Pic"
          />
          <p className=" text-sm">Frontend Developer</p>
          <h1 className="text-4xl">Anant Singh</h1>
          <p className=" text-zinc-500">
            Seasoned Frontend developer from Bangalore with 4 years of experience in crafting high-performance,
            user-friendly web applications using React.js and Next.js
          </p>
        </div>
        <div className="flex flex-row sm:flex-col gap-4 flex-wrap py-4 sm:py-0">
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 bg-blue-500 text-white text-center border-b-4 border-blue-700 hover:bg-blue-500/90 transition-all"
            href="https://www.linkedin.com/in/anantsinghcross/"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <FaLinkedinIn size={20} />
              <p>LinkedIn</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 bg-rose-500 text-white text-center border-b-4 border-rose-700 hover:bg-rose-500/90 transition-all"
            href="https://www.instagram.com/oregano.seasoning/"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <BsInstagram size={20} />
              <p>Instagram</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 bg-green-500 text-white text-center border-b-4 border-green-700 hover:bg-green-500/90 transition-all"
            href="https://github.com/anantSinghCross"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <FiGithub size={20} />
              <p>GitHub</p>
            </span>
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 bg-neutral-500 text-white text-center border-b-4 border-neutral-700 hover:bg-neutral-500/90 transition-all"
            href="mailto:anantsingh.cse@gmail.com"
          >
            <span className="flex items-center gap-2 sm:gap-5">
              <TbMailbox size={20} />
              <p>Email</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
