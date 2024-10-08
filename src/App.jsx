import { Fragment } from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Summary from "./components/Summary";

function App() {
  return (
    <section className="flex flex-col items-center gap-10 my-10">
      <Landing/>
      <Summary/>
      <Projects/>
    </section>
  );
}

export default App;
