const Contact = () => {

return (
  <section
    id="contact"
    style={{
      padding: "5rem 1rem",
      backgroundColor: "#000",
      color: "white",
      textAlign: "center",
    }}
  >
    <h2
    style={{
      fontSize: "1.5rem",
      fontWeight: "600",
      marginBottom: "1rem",
    }}
    >
      Contact Me
    </h2>
    <p
    style={{
      color: "#ccc",
      marginBottom: "1rem",
      fontSize: "1rem",
    }}
    >
      If you would like to get in touch, please reach out! 
    </p>
    <a
    href="mailto:sylviemendez21@gmail.com"
    style={{
      display: "inline-block",
      padding: "12px 24px",
      backgroundColor: "#2563eb", // Tailwind blue-600
      color: "white",
      borderRadius: "8px",
      fontWeight: "500",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={e => e.currentTarget.style.backgroundColor = "#1d4ed8"} // blue-700
    onMouseOut={e => e.currentTarget.style.backgroundColor = "#2563eb"}
    >
        Send an Email
    </a>
  </section>
    );
  };

export default Contact;