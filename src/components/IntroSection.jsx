export default function IntroSection() {
  return (
    <section className="intro">
      <div className="intro--content">
        <h1 className="intro--heading">I'm Anqi,<br />building systems that scale.</h1>
        <hr className="intro--dash" />
        <h2 className="intro--subheading">
          Backend engineer with experience across
          <span className="intro--keywords">
            <span className="intro--keyword">Product Manager</span>
            <span className="intro--keyword">Analyst</span>
            <span className="intro--keyword">SDE</span>
            <span className="intro--keyword">AI</span>
          </span>
          building large-scale distributed systems on AWS and Kubernetes, with
          recent work in LLM-powered automation for incident response.
        </h2>
      </div>
    </section>
  );
}
