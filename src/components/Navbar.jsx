import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd"
    }}>
      {/* Logo */}
      <Link to="/" style={{
        fontSize: "24px",
        fontWeight: "bold",
        textDecoration: "none",
        color: "#333"
      }}>
        Closied
      </Link>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/listings" style={{
          padding: "8px 15px",
          backgroundColor: "#17a2b8",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          View Listings
        </Link>
        <Link to="/register" style={{
          padding: "8px 15px",
          backgroundColor: "#007BFF",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          Register
        </Link>
        <Link to="/login" style={{
          padding: "8px 15px",
          backgroundColor: "#28A745",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

