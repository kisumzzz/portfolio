import { Link } from "react-router-dom";
import { projects } from "../data/siteContent.js";
import ProjectsSection from "../components/ProjectsSection.jsx";

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="page-intro">
        <p className="section-kicker">Projects</p>
        <h1 className="page-title">
          Small projects,
          <span>experiments, and ideas that became something real.</span>
        </h1>
        <p className="page-copy">
          These highlights focus on the kinds of systems I have built in
          practice: LLM-powered automation, event-driven messaging platforms,
          and cloud infrastructure that improves reliability and delivery speed.
        </p>
      </section>

      <ProjectsSection projects={projects} />

      <section className="page-footer-links">
        <Link className="text-link" to="/experience">
          Go to Experience
        </Link>
      </section>
    </main>
  );
}
