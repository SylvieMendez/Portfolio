/*
const Hero = () => {
   return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 space-y-6 py-20">
      <h1 className="text-6xl font-extrabold text-white drop-shadow">
        Sylvie Mendez
      </h1>
      <p className="text-xl text-white/80 max-w-xl">
        Developer | JavaScript | React | UI/UX
      </p>
    <div className="flex flex-wrap justify-center mt-6">
      <a
        href="#about"
        className="mx-2 text-blue-400 hover:bg-gray-100 transition"
      >
        About Me
      </a>
      
      <a
        href="#projects"
        className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Projects
      </a>
      <a
        href="/SYLVIEMENDEZ_Resume.pdf" download
        className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Resume
      </a>
      <a
        href="#certificates"
        className="bg-white text-indigo-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
      >
        Certificates
      </a>
    </div>
    <div className="mt-8 animate-bounce text-2xl text-white">
            ↓
    </div>
    </section>
  );
};

export default Hero;
*/
import ParticlesBackground from "./particlesBackground";

const Hero = () => {
return (
  <section
    style={{
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "5rem 1rem",
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#0f0f0f",
    }}
  >
    {/* Motion background layer */}
    <div 
    style={{
    position: "absolute",
    inset: 0,
    height: "100%",
    width: "100%",
  }}>
    <ParticlesBackground />
    </div>

    {/* Foreground content */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <h1 style={{ fontSize: "3.5rem", fontWeight: "800", color: "white", textShadow: "0 1px 4px rgba(0,0,0,0.5)", marginBottom: "1rem" }}>
        Sylvie Mendez
      </h1>
      <p style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.8)", maxWidth: "40rem", marginBottom: "2rem" }}>
        Developer | JavaScript | React | UI/UX
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem", color: "white"}}>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="/SYLVIEMENDEZ_Resume.pdf" download>Resume</a>
        <a href="#certificates">Certificates</a>
      </div>

      <div style={{ fontSize: "2rem", color: "white", animation: "bounce 2s infinite" }}>
        ↓
      </div>
    </div>
  </section>
  );
};
export default Hero;