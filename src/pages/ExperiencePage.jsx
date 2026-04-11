import { Link } from "react-router-dom";
import { experiences } from "../data/siteContent.js";
import ExperienceSection from "../components/ExperienceSection.jsx";

export default function ExperiencePage() {
  return (
    <main className="page-shell">
      <section className="page-intro">
        <p className="section-kicker">Experience</p>
        <h1 className="page-title">
          A running record of
          <span>roles, responsibilities, and how I like to work.</span>
        </h1>
        <p className="page-copy">
          My work has centered on backend engineering, distributed systems, AI
          automation, and product-minded execution, with experience spanning
          Amazon, technical product management, and graduate study in systems
          and analytics.
        </p>
      </section>

      <ExperienceSection experiences={experiences} />

      <section className="page-footer-links">
        <Link className="text-link" to="/projects">
          Go to Projects
        </Link>
      </section>
    </main>
  );
}
