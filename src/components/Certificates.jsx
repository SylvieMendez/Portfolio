const Certificates = () => {
  return (
    <section
    id="certificates"
    style={{
      padding: "5rem 1rem",
      backgroundColor: "#000",
    }}
    >

      <h2
      style={{
        fontSize: "2.25rem",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "2.5rem",
      }}
      > 
      Certificates
      </h2>

      <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.5rem",
      }}
      >
        <div
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
        >
          <h3 className="text-xl font-semibold">FreeCodeCamp Web Development</h3>
          <p className="mt-2">Completed 300+ hours of hands-on training focused on HTML5, CSS3, Flexbox, Grid, and responsive design principles. Gained practical experience building accessible, mobile-friendly web pages and user interfaces.</p>
        </div>
        <div
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
        >
          <h3 className="text-xl font-semibold">Google Data Analytics</h3>
          <p className="mt-2">8-course program focused on the foundations of data analytics, including data cleaning, analysis, and visualization using tools such as SQL, spreadsheets, Tableau, and R. Gained hands-on experience with real-world data to derive insights, make data-driven decisions, and communicate findings effectively to stakeholders.</p>
        </div>
      <div
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
        >
          <h3 className="text-xl font-semibold">CodePath Intermediate Web Development</h3>
          <p className="mt-2">10-week course of designing complex, reusable components in React and JavaScript and integrated real-world data to strengthen hands-on experience in front-end development and agile teamwork.</p>
        </div>
      <div
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        }}
        >
          <h3 className="text-xl font-semibold">Computer Programming Specialist</h3>
          <p className="mt-2"> Earned certificate through intense coursework working with backend languages such as C++, C#, and frameworks.</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;