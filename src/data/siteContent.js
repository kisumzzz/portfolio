export const projects = [
  {
    title: "LLM Incident Investigation System",
    category: "AI SYSTEMS / INCIDENT RESPONSE / BACKEND ENGINEERING",
    description:
      "Built an LLM-powered incident investigation system at Amazon that reduced incident triage time by 80% across 5+ production microservices through structured execution, scoped agents, and multi-stage fallbacks.",
    link: "/projects",
    linkLabel: "View project highlights",
    imageLabel: "LLM Ops",
    imageClassName: "",
  },
  {
    title: "Chatbot Initialization Platform",
    category: "DISTRIBUTED SYSTEMS / EVENT-DRIVEN ARCHITECTURE",
    description:
      "Launched an event-driven chatbot initialization feature for AWS Connect supporting 800K+ daily conversations, with SQS-based routing, session caching, and 99.99% availability across global regions.",
    link: "/projects",
    linkLabel: "See more details",
    imageLabel: "Chat Flow",
    imageClassName: "projects--image-card-alt",
  },
  {
    title: "EKS Testing Platform",
    category: "CLOUD INFRASTRUCTURE / KUBERNETES / DEV PRODUCTIVITY",
    description:
      "Architected a cloud-native testing platform on Amazon EKS, cutting end-to-end deployment time from 6 weeks to 10 days while improving reliability and launch efficiency for production features.",
    link: "/projects",
    linkLabel: "Browse project archive",
    imageLabel: "EKS",
    imageClassName: "projects--image-card-soft",
  },
];

export const experiences = [
  {
    initials: "AM",
    company: "Amazon Web Services, AWS Connect",
    role: "Software Development Engineer | Seattle, WA | 09/2022 - Present",
    bullets: [
      "Built large-scale, event-driven distributed systems supporting 500M+ daily chat interactions.",
      "Designed LLM-powered automation for incident response, cutting triage time by 80% across production microservices.",
      "Improved reliability and scalability with asynchronous architectures, observability, and cloud-native infrastructure on AWS and Kubernetes.",
    ],
  },
  {
    initials: "AM",
    company: "Amifor Management LLC",
    role: "Technical Product Manager | Atlanta, GA | 05/2021 - 08/2022",
    bullets: [
      "Led cross-functional product and engineering work for a smart lock app with 1K+ daily active users.",
      "Drove prototyping, user story definition, and product execution across technical and operational workflows.",
      "Improved workflow efficiency by 60% through automation, KPI dashboards, and process streamlining.",
    ],
  },
  {
    initials: "ED",
    company: "Graduate Education",
    role: "M.S. Information Systems + M.S. Business Analytics",
    bullets: [
      "Trine University, M.S. Information Systems | 2023/01 - 2025/12",
      "Rensselaer Polytechnic Institute, M.S. Business Analytics | 2019/08 - 2020/12",
      "Built a foundation across systems, analytics, product thinking, and technical execution.",
    ],
  },
];

export const hobbies = [
  {
    label: "Creative",
    title: "Knitting",
    description:
      "I enjoy making things slowly by hand. Knitting is one of the ways I unwind and spend time with texture, color, and patience.",
  },
  {
    label: "Active",
    title: "Tennis",
    description:
      "I like the rhythm of tennis and the balance between focus, movement, and repetition that makes every match feel a little different.",
  },
  {
    label: "Home",
    title: "Guinea pigs",
    description:
      "A soft spot in my life is reserved for guinea pigs. They bring a lot of personality, chaos, and joy into otherwise ordinary days.",
  },
];

export const contactLinks = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "GitHub", href: "https://github.com", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com", external: true },
];
