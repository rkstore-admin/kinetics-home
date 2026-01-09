export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "100px",
        padding: "32px 16px",
        textAlign: "center",
        opacity: 0.6,
        fontSize: "14px"
      }}
    >
      © {new Date().getFullYear()} Kinetic’s Home · All rights reserved
    </footer>
  );
}
