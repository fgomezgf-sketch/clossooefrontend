import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Closied</Link>
      <div className="nav-links">
        <Link to="/listings">Listings</Link>
        <Link to="/register" className="register-link">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
