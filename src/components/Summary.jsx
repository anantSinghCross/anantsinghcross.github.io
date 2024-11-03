import React from "react";
import { SiAdobe } from "react-icons/si";

function Summary() {
  return (
    <div className="flex justify-center max-w-3xl w-full">
      <div className="flex flex-col h-max gap-5 p-10 bg-white">
        <h1 className="text-2xl">PROFESSIONAL SUMMARY</h1>
        <p className=" text-zinc-500 sm:max-w-3xl">
          Accomplished Software Development Engineer with over 4 years of experience specializing in
          JavaScript, React and Next. Adept at developing high-performance, user-centric web
          applications. Strong skills in React Hooks, Redux, Node.js, and performance optimisation
          of React apps. Experienced in working with international teams and mentoring new recruits,
          ensuring seamless project execution and continuous improvement.
        </p>
        <p className=" text-zinc-500">
          Currently a part of Business Platform Engineering team at <span className=" inline-flex items-baseline gap-1 px-1 flex-nowrap"><SiAdobe size={15} color="red"/> Adobe </span>, providing an end-to-end
          experience for our customers, as well as simple, effective processes for internal clients
          to bring their products and services rapidly to market, using a self-service approach.
        </p>
      </div>
    </div>
  );
}

export default Summary;
