function ExperienceCard({ experience }) {
  return (
    <article className="experiences--experience">
      <div className="experiences--logo">
        <span>{experience.initials}</span>
      </div>
      <div className="experiences--details">
        <h2 className="experiences--name">{experience.company}</h2>
        <hr className="experiences--dash" />
        <div className="experiences--scope">
          <h3>{experience.role}</h3>
          <ul>
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection({ experiences }) {
  return (
    <section className="experiences" id="experience">
      <div className="experiences--heading">
        <h2>Experience</h2>
      </div>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} experience={experience} />
      ))}
    </section>
  );
}
