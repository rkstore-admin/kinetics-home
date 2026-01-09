export default function Home() {
  return (
    <section style={{ marginTop: "120px", textAlign: "center" }}>
      <h1 style={{
        fontSize: "48px",
        fontWeight: "800",
        background: "linear-gradient(90deg, gold, aqua)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        Create. Edit. Elevate.
      </h1>

      <p style={{ marginTop: "20px", color: "#ccc" }}>
        Hire professional editors or learn editing from beginner to pro.
      </p>

      <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
        <button className="glass">Hire an Editor</button>
        <button className="glass">Learn Editing</button>
      </div>
    </section>
  );
}

