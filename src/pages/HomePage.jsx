import IntroSection from "../components/IntroSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ExperienceSection from "../components/ExperienceSection.jsx";
import HobbiesSection from "../components/HobbiesSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import {
  projects,
  experiences,
  hobbies,
  contactLinks,
} from "../data/siteContent.js";

export default function HomePage() {
  return (
    <main>
      <IntroSection />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <HobbiesSection hobbies={hobbies} />
      <ContactSection links={contactLinks} />
    </main>
  );
}
