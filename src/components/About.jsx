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
        I'm Sylvie — Aspiring Frontend Software Engineer with a strong foundation in web development and a passion for building user-friendly, responsive applications. I started teaching myself to code two years ago and am now earning a degree in computer science to build a deeper understanding and advance my skills. I'm experienced in designing and developing modern interfaces using React, JavaScript, HTML, and CSS, with additional knowledge in backend technologies like Node.js and MongoDB.

        Skilled in creating clean, maintainable code and reusable components with an emphasis on performance, accessibility, and cross-device compatibility. Adept at integrating RESTful APIs, managing state efficiently, and collaborating across the development lifecycle to deliver impactful digital experiences.

        Committed to continuous learning and growth, with a strong interest in UI/UX design and emerging frontend technologies. Currently pursuing a degree in Computer Science at Hunter College and actively building projects that demonstrate both technical proficiency and creative problem-solving.

        Dedicated to writing scalable, user-centered solutions and contributing to inclusive, collaborative engineering environments.
      </p>
      </section>
    </Motion.section>
  );
};

export default About;