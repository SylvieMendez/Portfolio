/* import { motion as Motion } from "framer-motion";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Art Gallery",
    description: "This project showcases a use of multiple API's for photo viewing from NASA, Unsplash, And Pixel. It can be used as an art gallery giving you the ability to search pictures as well.",
    image: "/images/art-gallery.png",
    demo: "https://sylviemendez.github.io/Art-Gallery/",
    code: "https://github.com/SylvieMendez",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
      { name: "API" },
    ],
  },
  {
    title: "Rock Paper Scissors Game",
    description: "An interactive rock paper scissors game where you choose either roc, paper, or scissors to play and the computer generates a random play back. It keeps track of your scores such as wins, losses, and ties until you reset the scoreboard.",
    image: "/images/rockpaperscissors.png",
    demo: "https://sylviemendez.github.io/Rock-Paper-Scissors/",
    code: "https://github.com/SylvieMendez",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
    ],
  },
  {
    title: "Landing Page",
    description: "The SylvsLux product landing page is designed to showcase the delicious offerings at SylvsLux and promote customer engagement through an intuitive and visually appealing interface. The page aims to provide potential customers with essential information about our products, pricing, and delivery options.",
    image: "/images/product-landing-page.png",
    demo: "https://sylviemendez.github.io/Product-landing-page/",
    code:"https://github.com/SylvieMendez",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
  },
];

const Projects = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-16"
    >
      <section id="projects" className="py-20 px-4 bg-black text-white">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="grid gap-8 !p-6 md:grid-cols-2 lg:grid-cols-3 place-items-center w-[80%] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demo={project.demo}
            code={project.code}
            technologies={project.technologies}
          />
        ))}
      </div>
      </section>
    </Motion.section>
  );
};

export default Projects;
*/
import { motion as Motion } from "framer-motion";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Art Gallery",
    description: "This project showcases a use of multiple API's for photo viewing from NASA, Unsplash, And Pixel. It can be used as an art gallery giving you the ability to search pictures as well.",
    image: "/images/art-gallery.png",
    demo: "https://sylviemendez.github.io/Art-Gallery/",
    code: "https://github.com/SylvieMendez/Art-Gallery",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
      { name: "API" },
    ],
  },
  {
    title: "Rock Paper Scissors Game",
    description: "An interactive rock paper scissors game where you choose either roc, paper, or scissors to play and the computer generates a random play back. It keeps track of your scores such as wins, losses, and ties until you reset the scoreboard.",
    image: "/images/rockpaperscissors.png",
    demo: "https://sylviemendez.github.io/Rock-Paper-Scissors/",
    code: "https://github.com/SylvieMendez/Rock-Paper-Scissors",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
    ],
  },
  {
    title: "Landing Page",
    description: "The Treat Drop product landing page is designed to showcase the delicious offerings at Treat Drop and promote customer engagement through an intuitive and visually appealing interface. The page aims to provide potential customers with essential information about our products, pricing, and delivery options.",
    image: "/images/product-landing.png",
    demo: "https://sylviemendez.github.io/product-landing/",
    code:"https://github.com/SylvieMendez/product-landing",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
    ],
  },
];

const Projects = () => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ marginTop: "4rem", marginBottom: "4rem" }}
    >
      <section 
        id="projects" 
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "black",
          color: "white"
        }}
      >
      <h2 style={{ 
        fontSize: "1.875rem", 
        fontWeight: "600", 
        textAlign: "center", 
        marginBottom: "2rem" 
      }}>Projects</h2>
      <div style={{
        display: "grid",
        gap: "2rem",
        width: "80%",
        margin: "0 auto",
        alignItems: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
      }}
      className="md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            demo={project.demo}
            code={project.code}
            technologies={project.technologies}
          />
        ))}
      </div>
      </section>
    </Motion.section>
  );
};

export default Projects;