import myPic from "/mypic.JPG";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex flex-col sm:flex-row gap-2 w-max h-max p-10 m-2 rounded-3xl bg-gradient-to-tr from from-zinc-900 via-zinc-900 to-zinc-800 text-zinc-400 shadow-2xl">
        <div className="flex flex-col gap-2">
          <img className="w-24 h-24 rounded-full" src={myPic} alt="My Pic" />
          <p className=" text-sm">React Developer</p>
          <h1 className="text-white font-mono text-4xl">Anant Singh</h1>
          <p className="text-zinc-500 max-w-96">
            Seasoned React developer with 4 years of experience in crafting high-performance,
            user-friendly web applications.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col gap-4 flex-wrap py-4 sm:py-0">
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-tr from-blue-800 to-blue-500 shadow-xl shadow-blue-950 text-zinc-200 text-center hover:scale-105 transition-all"
            href="https://www.linkedin.com/in/anantsinghcross/"
          >
            LinkedIn
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-tr from-pink-800 to-pink-500 shadow-xl shadow-pink-950 text-zinc-200 text-center hover:scale-105 transition-all"
            href="https://www.instagram.com/oregano.seasoning/"
          >
            Instagram
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-tr from-green-800 to-green-500 shadow-xl shadow-green-950 text-zinc-200 text-center hover:scale-105 transition-all"
            href="https://github.com/anantSinghCross"
          >
            GitHub
          </a>
          <a
            className=" p-2 px-4 sm:p-3 sm:px-8 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-500 shadow-xl shadow-neutral-950 text-zinc-200 text-center hover:scale-105 transition-all"
            href="mailto:anantsingh.cse@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
