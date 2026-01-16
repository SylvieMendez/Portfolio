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
        <a href="MendezSylvieResume2026.pdf" download>Resume</a>
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