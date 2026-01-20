import { Link } from "react-router-dom";
import "./Navbar.css"; // optional, keep if you already have styles

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3>Experiment 2 – UI Components</h3>

      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </nav>
  );
}
