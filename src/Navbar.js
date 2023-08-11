import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site name
      </Link>
      <ul>
        <CustomLink to="/pricing">pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
