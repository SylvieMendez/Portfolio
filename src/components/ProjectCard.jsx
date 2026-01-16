import { motion as Motion } from "framer-motion";

const ProjectCard = ({ title, description, image, demo, code, technologies }) => {
  return (
    <Motion.div
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      style={{ 
        position: "relative",
        padding: "1.5rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(8px)",
        borderRadius: "0.75rem",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 300ms ease-in-out",
        maxWidth: "36rem",
        width: "80%",
        margin: "0 auto"
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderTopLeftradius: "12px",
            borderTopRightRadius: "12px"
          }}
        />
      )}
      <Motion.div
        style={{
          position: "relative",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          transition: "all 300ms ease-in-out"
        }}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.25rem", color: "white" }}>{title}</h3>
        <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.8)" }}>{description}</p>
        <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#BFDBFE", textDecoration: "none" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              Live Demo
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#BFDBFE", textDecoration: "none" }}
              onMouseOver={(e) => e.target.style.textDecoration = "underline"}
              onMouseOut={(e) => e.target.style.textDecoration = "none"}
            >
              GitHub
            </a>
          )}
        </div>
        {technologies && technologies.length > 0 && (
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {technologies.map((tech, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#4F46E5", // indigo-600
                  color: "white",
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  fontWeight: "500",
                  letterSpacing: "0.025em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem"
                }}
              >
                <span style={{ fontSize: "0.875rem" }}>{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        )}
      </Motion.div>
    </Motion.div>
  );
};

export default ProjectCard;