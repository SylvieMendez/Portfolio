import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-12 space-y-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <Hero />
        <main className="max-w-4xl mx-auto p-8">
          <About />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        </div>
      </div>
    </div>
  );

}

export default App;