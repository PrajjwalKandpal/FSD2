import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Lazy Loading SPA</h2>

      <div className="links">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/dashboard" className="link">
          Dashboard
        </NavLink>

        <NavLink to="/profile" className="link">
          Profile
        </NavLink>

        <NavLink to="/settings" className="link">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
