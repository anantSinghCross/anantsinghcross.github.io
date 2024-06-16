import React from "react";

function Summary() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col m-2 h-max gap-5 text-white p-10 bg-gradient-to-tr from-zinc-900 via-zinc-900 to-zinc-800 rounded-3xl">
        <h1 className=" text-2xl w-max bg-gradient-to-tr from-teal-200 to-teal-500 bg-clip-text text-transparent font-extrabold">
          PROFESSIONAL SUMMARY
        </h1>
        <p className=" text-zinc-400 sm:max-w-3xl">
          Accomplished Software Development Engineer with over 4 years of experience specializing in
          JavaScript and React. Adept at developing high-performance, user-centric web applications.
          Strong skills in React Hooks, Redux, Node.js, and performance optimisation of React apps.
          Experienced in working with international teams and mentoring new recruits, ensuring
          seamless project execution and continuous improvement.
        </p>
      </div>
    </div>
  );
}

export default Summary;
