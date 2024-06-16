function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <div className="flex gap-2 w-max h-max p-10 rounded-3xl bg-gradient-to-tr from from-zinc-900 via-zinc-900 to-zinc-800 text-zinc-400 shadow-2xl">
        <div className="flex flex-col gap-2">
          <img className="w-24 h-24 rounded-full" src="public/mypic.jpg" alt="My Pic" />
          <p className=" text-sm">React Developer</p>
          <h1 className="text-white font-mono text-4xl">Anant Singh</h1>
          <p className="text-zinc-500 max-w-96">Seasoned React developer with 4 years of experience in crafting high-performance, user-friendly web applications.</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">Email</a>
          <a href="#">GitHub</a>
        </div>

      </div>
    </div>
  );
}

export default App;
