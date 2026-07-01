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
          shipping a production-grade agentic AI system for automated incident
          diagnosis on AWS Bedrock, alongside large-scale chat platforms and
          cloud-native infrastructure on Kubernetes.
        </h2>

        <div className="intro--metrics" aria-label="Key highlights">
          <div className="intro--metric">
            <strong>20M+</strong>
            <span>daily chat interactions at 99.99% availability</span>
          </div>
          <div className="intro--metric">
            <strong>90%</strong>
            <span>faster root cause analysis via agentic AI</span>
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
