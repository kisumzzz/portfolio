import { Link, NavLink, useLocation } from "react-router-dom";

export default function SiteNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link className="site-nav__brand" to="/">
          Anqi Zuo
        </Link>
        <nav className="site-nav__links">
          {isHome ? (
            <>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#hobbies">Hobbies</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/experience">Experience</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
