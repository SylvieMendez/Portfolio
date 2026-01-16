import { motion as Motion } from "framer-motion";

const About = () => {
  return (
    <Motion.section
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    margin: "3rem 0",
  }}
>
  <section
    id="about"
    style={{
      backgroundColor: "#000",
      color: "white",
      padding: "5rem 1rem",
      textAlign: "center",
    }}
  >
    <h2
    style={{
      fontSize: "1.875rem",
      fontWeight: "600",
      marginBottom: "1rem",
    }}
      >About Me</h2>
    <p
    style={{
    fontSize: "1.125rem",
    maxWidth: "42rem",
    margin: "0 auto",
    lineHeight: "1.75rem",
          }}
        >
          I'm Sylvie — a Frontend Software Engineer and Coding Instructor driven by a passion for building impactful, user-focused digital experiences. Currently pursuing a Computer Science degree at Hunter College, I specialize in developing modern, responsive web applications using React, JavaScript, and contemporary frontend technologies.

          <br /><br />

          I have hands-on experience building full-stack applications with React, Supabase, and RESTful APIs, focusing on clean, maintainable code and reusable components that prioritize performance and accessibility.
          <br /><br />

          As a Coding Instructor at Code SpeakLabs, I teach programming fundamentals and physical computing (Scratch, Python, JavaScript, micro:bit) to 3rd-8th grade students, which has sharpened my ability to explain complex concepts clearly and adapt to different learning styles.

          <br /><br />

          I'm passionate about creating scalable, user-centered solutions and contributing to collaborative engineering teams where innovation and purpose drive meaningful impact.
      </p>
      </section>
    </Motion.section>
  );
};

export default About;