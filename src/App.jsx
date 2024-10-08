import { Fragment } from "react";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <section className="flex flex-col items-center gap-10 my-10">
      <Landing/>
      <Summary/>
      <Projects/>
      <ContactMe/>
    </section>
  );
}

export default App;
