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
        I'm Sylvie — an aspiring Frontend Software Engineer driven by a passion for building more than just functional code—I strive to create digital experiences that are impactful, transformative, and user-focused. I began teaching myself to code two years ago and am now pursuing a degree in Computer Science at Hunter College to deepen my understanding and advance my technical skills.

I specialize in developing modern, responsive interfaces using React, JavaScript, Tailwind, HTML, and CSS, and I have hands-on experience with backend technologies like Node.js and MongoDB. My focus is on writing clean, maintainable code and crafting reusable components that prioritize performance, accessibility, and cross-device compatibility.

I’m adept at integrating RESTful APIs, managing application state effectively, and collaborating throughout the development lifecycle to bring intuitive, high-quality products to life. I'm especially passionate about UI/UX design and continually explore emerging frontend technologies to stay ahead in the field.

Above all, I'm committed to building scalable, user-centered solutions and contributing to inclusive, collaborative engineering teams where creativity and purpose drive innovation.
      </p>
      </section>
    </Motion.section>
  );
};

export default About;