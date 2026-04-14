import { Link } from "react-router-dom";

export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro--content">
        <h1 className="intro--heading">
          I'm Anqi,
          <br />
          I build large-scale distributed systems and AI Applications.
        </h1>
        <hr className="intro--dash" />
        <h2 className="intro--subheading">
          My experience spans
          <span className="intro--keywords">
            <span className="intro--keyword">Backend Engineer</span>
            <span className="intro--keyword">Product Manager</span>
            <span className="intro--keyword">Business Analyst</span>
            <span className="intro--keyword">AI Automation</span>
          </span>
          and is grounded in building production systems that are reliable,
          scalable, and genuinely useful. More recently, that has meant
          architecting large-scale chat platforms on AWS, cloud-native
          infrastructure on Kubernetes, and LLM-powered automation for incident
          response.
        </h2>

        <div className="intro--metrics" aria-label="Key highlights">
          <div className="intro--metric">
            <strong>500M+</strong>
            <span>daily chat interactions supported</span>
          </div>
          <div className="intro--metric">
            <strong>80%</strong>
            <span>faster incident triage through LLM automation</span>
          </div>
          <div className="intro--metric">
            <strong>AWS + K8s</strong>
            <span>production systems, observability, and scale</span>
          </div>
        </div>

        <div className="intro--actions">
          <Link className="intro--action intro--action-primary" to="/projects">
            View Projects
          </Link>
          <Link className="intro--action" to="/experience">
            Explore Experience
          </Link>
        </div>
      </div>
    </section>
  );
}
