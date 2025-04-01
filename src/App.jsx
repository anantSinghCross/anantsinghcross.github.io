import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Summary from "./components/Summary";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <section className="flex flex-col items-center gap-10 my-10">
      <div className="animate-fade-in-down">
        <Landing/>
      </div>
      <div className="animate-fade-in-down" style={{ animationDelay: '200ms' }}>
        <Summary/>
      </div>
      <div className="animate-fade-in-down" style={{ animationDelay: '400ms' }}>
        <Projects/>
      </div>
      <div className="animate-fade-in-down" style={{ animationDelay: '600ms' }}>
        <ContactMe/>
      </div>
    </section>
  );
}

export default App;
