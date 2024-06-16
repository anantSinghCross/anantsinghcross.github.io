import React from 'react'

function Summary() {
  return (
    <div className='flex justify-center h-screen'>
      <div className='flex flex-col gap-5 text-white p-10'>
        <h1 className=' text-2xl w-max bg-gradient-to-tr from-blue-700 to-indigo-400 bg-clip-text text-transparent font-extrabold'>PROFESSIONAL SUMMARY</h1>
        <p className=' text-zinc-300 sm:max-w-3xl'>
          Accomplished Software Development Engineer with over 4 years of experience specializing in JavaScript and React. Adept at developing high-performance, user-centric web applications. Strong skills in React Hooks, Redux, Node.js, and performance optimisation of React apps. Experienced in working with international teams and mentoring new recruits, ensuring seamless project execution and continuous improvement.
        </p>
      </div>
    </div>
  )
}

export default Summary;