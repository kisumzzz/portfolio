import { Link } from "react-router-dom";

export default function ContactSection({ links }) {
  return (
    <section className="contact" id="contact">
      <div className="contact--heading">
        <h2>Contact & more</h2>
      </div>

      <div className="contact--content">
        <ul className="contact--list">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link to={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <h3>•</h3>
      </div>

      <p className="footer-note">Copyright {new Date().getFullYear()}, Anqi Zuo</p>
    </section>
  );
}
