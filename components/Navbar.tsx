export default function Navbar() {
  return (
    <nav className="glass" style={{
      position: "fixed",
      top: "16px",
      left: "16px",
      right: "16px",
      padding: "16px",
      display: "flex",
      justifyContent: "space-between",
      zIndex: 10
    }}>
      <b style={{ color: "gold" }}>Kinetic’s Home</b>
      <div style={{ display: "flex", gap: "16px" }}>
        <a href="/">Home</a>
        <a href="/services">Hire</a>
        <a href="/learn">Learn</a>
        <a href="/pricing">Pricing</a>
      </div>
    </nav>
  );
}
