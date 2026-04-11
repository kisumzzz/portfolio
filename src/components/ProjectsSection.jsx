import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const projectClassName = "projects--project";
  const imageCardClassName = [
    "projects--image-card",
    project.imageClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={projectClassName}>
      <div className="projects--image" aria-hidden="true">
        <div className={imageCardClassName}>
          <span>{project.imageLabel}</span>
        </div>
      </div>
      <div className="projects--details">
        <h1 className="projects--title">{project.title}</h1>
        <p className="projects--category">{project.category}</p>
        <p className="projects--description">{project.description}</p>
        <Link to={project.link} className="projects--link">
          {project.linkLabel}
        </Link>
      </div>
    </article>
  );
}

export default function ProjectsSection({ projects }) {
  return (
    <section className="projects" id="projects">
      <div className="projects--heading">
        <h2>Projects</h2>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
