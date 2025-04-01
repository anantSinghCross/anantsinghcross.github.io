import React from "react";
import { SiAdobe } from "react-icons/si";

function Summary() {
  return (
    <div className="flex justify-center max-w-3xl w-full">
      <div className="flex flex-col h-max gap-5 p-10 bg-white hover:shadow-md transition-all duration-500 relative 
      after:absolute after:content-[''] after:inset-0 after:border-0 after:hover:border-l-2 after:hover:border-blue-500 after:transition-all after:duration-700">
        <h1 className="text-2xl relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-700 hover:after:w-20">PROFESSIONAL SUMMARY</h1>
        <p className="text-zinc-500 sm:max-w-3xl opacity-90 hover:opacity-100 transition-opacity duration-500">
          Accomplished Software Development Engineer with over 4 years of experience specializing in
          JavaScript, React and Next. Adept at developing high-performance, user-centric web
          applications. Strong skills in React Hooks, Redux, Node.js, and performance optimisation
          of React apps. Experienced in working with international teams and mentoring new recruits,
          ensuring seamless project execution and continuous improvement.
        </p>
        <p className="text-zinc-500 opacity-90 hover:opacity-100 transition-opacity duration-500">
          Currently a part of Business Platform Engineering team at <span className="inline-flex items-baseline gap-1 px-1 flex-nowrap group"><SiAdobe size={15} color="red" className="transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"/> <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">Adobe</span></span>, providing an end-to-end
          experience for our customers, as well as simple, effective processes for internal clients
          to bring their products and services rapidly to market, using a self-service approach.
        </p>
      </div>
    </div>
  );
}

export default Summary;
