import { motion as Motion } from "framer-motion";
import { FaCss3Alt, FaGithub, FaJs, FaReact } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "FreeTime",
    description: "A full-stack social platform where users can create, share, and interact with community posts. Features include CRUD operations, real-time upvoting, threaded comments, dynamic search, and content filtering for enhanced user engagement.",
    image: "images/freetime.png",
    demo: "https://sylviemendez.github.io/FreeTime/",
    code: "https://github.com/SylvieMendez/FreeTime",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
    ],
  },
  {
    title: "AstroDash",
    description: "An interactive weather dashboard displaying real-time data for multiple U.S. cities. Integrates OpenWeatherMap API with data visualization through custom bar charts, dual filtering system, and responsive design for seamless cross-device experience.",
    image: "images/astrodash.png",
    demo: "https://sylviemendez.github.io/Data_Dashboard/",
    code: "https://github.com/SylvieMendez/Data_Dashboard",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Javascript", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
      { name: "API" },
    ],
  },
  {
    title: "Art Gallery",
    description: "This project showcases a use of multiple API's for photo viewing from NASA, Unsplash, And Pixel. It can be used as an art gallery giving you the ability to search pictures as well.",
    image: "images/art-gallery.png",
    demo: "https://sylviemendez.github.io/Art-Gallery/",
    code: "https://github.com/SylvieMendez/Art-Gallery",
    technologies: [
      { name: "Javascript", icon: <FaJs /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Git", icon: <FaGithub /> },
      { name: "API" },
    ],
  },
];

const Projects = () => {
  return (
    <Motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        marginTop: "4rem",
        marginBottom: "4rem",
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
    </Motion.section>
  );
};

export default Projects;