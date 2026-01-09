export default function Navbar() {
  return (
    <nav
      className="glass"
      style={{
        position: "sticky",
        top: "16px",
        margin: "16px",
        padding: "16px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 50
      }}
    >
      <span className="gradient-text" style={{ fontSize: "20px", fontWeight: 800 }}>
        Kinetic’s Home
      </span>

      <div
        style={{
          display: "flex",
          gap: "16px",
          fontSize: "14px"
        }}
      >
        <a href="/">Home</a>
        <a href="/services">Hire</a>
        <a href="/learn">Learn</a>
        <a href="/pricing">Pricing</a>
      </div>
    </nav>
  );
}
