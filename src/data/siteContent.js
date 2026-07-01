export const projects = [
  {
    title: "Agentic AI Incident Diagnosis System",
    category: "AI AGENTS / LLM ENGINEERING / INCIDENT RESPONSE",
    description:
      "Built a ReAct-based agentic system on AWS Bedrock that orchestrates MCP-enabled tools across ticketing, logging, and codebase systems with hybrid RAG for enterprise knowledge retrieval, cutting root cause analysis time by 90% with evidence-backed citations and human-in-the-loop verification.",
    link: "/projects",
    linkLabel: "View project highlights",
    imageLabel: "Agentic AI",
    imageClassName: "",
  },
  {
    title: "Chatbot Initialization Platform",
    category: "DISTRIBUTED SYSTEMS / EVENT-DRIVEN ARCHITECTURE",
    description:
      "Led an event-driven chatbot initialization feature for AWS Connect supporting 800K+ daily chats, delivering $1M+ ARR through personalized first-interaction routing, SQS-based async routing, session caching, and 99.99% availability across global regions.",
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
    initials: "AMZ",
    company: "Amazon Web Services, AWS Connect",
    role: "Software Development Engineer | Seattle, WA | 09/2022 - 06/2026",
    bullets: [
      "Built a ReAct-based agentic AI system on AWS Bedrock for automated incident diagnosis, orchestrating MCP-enabled tools and hybrid RAG to cut root cause analysis time by 90%.",
      "Designed a self-correction loop with LLM-as-judge critic models and human-in-the-loop verification, eliminating 80% of manual review effort and improving diagnosis accuracy by 36%.",
      "Led an event-driven chatbot initialization feature supporting 800K+ daily chats, delivering $1M+ ARR through personalized first-interaction routing.",
      "Architected SQS-based asynchronous message routing with session caching for 20K+ real-time sessions, cutting DynamoDB load by 95% and sustaining 99.99% availability.",
      "Architected a cloud-native testing platform on AWS EKS with Docker and Helm, cutting test deployment time from 6 weeks to 10 days.",
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
      "Trine University, M.S. Information Systems | 2024/01 - 2025/12",
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
  { label: "Email", href: "zuoanqiwk@gmail.com" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "GitHub", href: "https://github.com/kisumzzz", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anqizuo/", external: true },
];
