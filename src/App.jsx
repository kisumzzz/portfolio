import { Routes, Route } from "react-router-dom";
import SiteNav from "./components/SiteNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ResumeChatbot from "./components/ResumeChatbot.jsx";

export default function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <ResumeChatbot variant="floating" />
    </>
  );
}
