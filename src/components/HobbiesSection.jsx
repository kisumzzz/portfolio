function HobbyCard({ hobby }) {
  return (
    <article className="hobbies--item">
      <p className="hobbies--label">{hobby.label}</p>
      <h3>{hobby.title}</h3>
      <p>{hobby.description}</p>
    </article>
  );
}

export default function HobbiesSection({ hobbies }) {
  return (
    <section className="hobbies" id="hobbies">
      <div className="hobbies--heading">
        <h2>Hobbies</h2>
      </div>
      <div className="hobbies--grid">
        {hobbies.map((hobby) => (
          <HobbyCard key={hobby.title} hobby={hobby} />
        ))}
      </div>
    </section>
  );
}
