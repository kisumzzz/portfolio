const revealItems = document.querySelectorAll(
  ".intro--content, .projects--project, .experiences--experience, .page-intro, .timeline-item, .project-card, .contact"
);

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -30px 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));
