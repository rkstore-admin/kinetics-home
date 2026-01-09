export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "120px 16px 40px",
        textAlign: "center"
      }}
    >
      {/* HERO */}
      <h1
        className="gradient-text"
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 900
        }}
      >
        Create. Edit. Elevate.
      </h1>

      <p
        style={{
          marginTop: "20px",
          maxWidth: "600px",
          marginInline: "auto",
          opacity: 0.8,
          fontSize: "16px"
        }}
      >
        Hire professional editors or learn editing from beginner to pro with a
        premium creative experience.
      </p>

      {/* CTA */}
      <div
        style={{
          marginTop: "36px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center"
        }}
      >
        <button className="glass-btn">Hire an Editor</button>
        <button className="glass-btn">Learn Editing</button>
      </div>

      {/* FEATURE CARDS */}
      <section
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {[
          "Video Editing",
          "Thumbnail Design",
          "Reels & Shorts",
          "Banner Design",
          "Photo Editing",
          "Motion Graphics"
        ].map((skill) => (
          <div key={skill} className="glass" style={{ padding: "24px" }}>
            <h3 style={{ fontWeight: 700 }}>{skill}</h3>
            <p style={{ marginTop: "8px", opacity: 0.7, fontSize: "14px" }}>
              Professional, cinematic and high-conversion edits.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
