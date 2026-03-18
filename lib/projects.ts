export interface CaseStudy {
  summary: string;
  timeline: string;
  role: string;
  challenge: {
    description: string;
    points: string[];
  };
  solution: {
    description: string;
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    imageUrl?: string;
  };
  outcomes: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    id: "hracine",
    title: "Hracine",
    description: "An e-commerce website for skincare / beauty products",
    image: "https://images.unsplash.com/photo-1712112797786-d43620cac1fd?q=80&w=1044&auto=format&fit=crop",
    tags: ["React", "Typescript", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://hracine-frontend.vercel.app/",
    githubUrl: "https://github.com/Elite1dev1/hracine",
    caseStudy: {
      summary: "A modern e-commerce and consultation platform designed to simplify haircare routines, connect users with experts, and deliver personalized product experiences.",
      timeline: "Jan 2024 - Mar 2024",
      role: "Lead Full-stack Engineer",
      challenge: {
        description: "The haircare market is highly fragmented, leaving users overwhelmed and underserved.",
        points: [
          "Users struggle to find products tailored to their specific hair type",
          "Inconsistent design system across web and mobile views",
          "Generic e-commerce platforms offer no personalization",
          "Slow page load times impacting SEO rankings",
        ],
      },
      solution: {
        description: "We rebuilt the platform from the ground up using a modern technical stack to ensure future-proofing and high performance. The core focus was on a **Full-stack React Architecture** and a highly modular UI system.",
        features: [
          {
            title: "React & Tailwind CSS",
            description: "Implemented a custom-built utility-first design system for rapid UI iteration and consistent component behavior.",
            icon: "code",
          },
          {
            title: "Headless CMS Integration",
            description: "Separated content from presentation, allowing educators to update curriculums in real-time without developer intervention.",
            icon: "api",
          },
        ],
        imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      },
      outcomes: [
        { label: "Growth", value: "140%", sublabel: "Increase in monthly active users" },
        { label: "Speed", value: "0.8s", sublabel: "Average page load time achieved" },
        { label: "Support", value: "-60%", sublabel: "Reduction in UX-related support tickets" },
        { label: "Rating", value: "4.9/5", sublabel: "Average user satisfaction score" },
      ],
    },
  },
  {
    id: "linkedin-clone",
    title: "Linked IN",
    description: "Online Job marketplace, edit profile- add experience, education, skills.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    tags: ["Vue.js", "Express", "MongoDB", "REST API"],
    liveUrl: "https://linkedin-clone-nvds.onrender.com/",
    githubUrl: "https://github.com/Elite1dev1/Linkedin-clone",
    caseStudy: {
      summary: "A high-fidelity LinkedIn clone focused on real-time interactions and professional networking features.",
      timeline: "Nov 2023 - Jan 2024",
      role: "Full-stack Developer",
      challenge: {
        description: "Building a complex social network requires handling real-time notifications, complex data relationships, and a seamless user interface for profile management.",
        points: [
          "Implementing complex nested comment systems",
          "Optimizing real-time feed updates",
          "Managing large-scale image uploads for profiles and posts",
          "Ensuring secure authentication and authorization",
        ],
      },
      solution: {
        description: "Utilized Vue.js for a reactive frontend and Express/MongoDB for a scalable backend. Implemented Socket.io for real-time features and Cloudinary for media management.",
        features: [
          {
            title: "Real-time Notifications",
            description: "Instant alerts for connections, messages, and post interactions using WebSockets.",
            icon: "notifications",
          },
          {
            title: "Dynamic Profile Builder",
            description: "Intuitive interface for users to build and showcase their professional experience and education.",
            icon: "person",
          },
        ],
      },
      outcomes: [
        { label: "Performance", value: "95", sublabel: "Lighthouse performance score" },
        { label: "Engagement", value: "2x", sublabel: "Increase in user interaction time" },
        { label: "Uptime", value: "99.9%", sublabel: "Backend reliability during peak loads" },
      ],
    },
  },
  {
    id: "bammby",
    title: "Bambby",
    description: "Website for a mobile dating app (Bammby) that connects people with similiar interests.",
    image: "https://plus.unsplash.com/premium_photo-1682309691851-b59943f822f2?q=80&w=2112&auto=format&fit=crop",
    tags: ["Angular", "Firebase", "TypeScript", "Bootstrap"],
    liveUrl: "https://bammby.com/",
    githubUrl: "https://github.com/Elite1dev1/project3",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with interactive elements.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "https://portfolio-website-t0zt.onrender.com/",
    githubUrl: "https://github.com/Elite1dev1/portfolio-website",
  },
  {
    id: "threads-clone",
    title: "Threads",
    description: "Full stack social media app, to share idea, meet new people and make conversations in real-time.",
    image: "https://images.unsplash.com/photo-1726066012751-2adfb5485977?q=80&w=2070&auto=format&fit=crop",
    tags: ["Chakra UI", "TypeScript", "Firebase", "Styled Components"],
    liveUrl: "https://threads-clone-weqm.onrender.com",
    githubUrl: "https://github.com/Elite1dev1/threads-clone/tree/master",
  },
  {
    id: "fintech-dashboard",
    title: "Financial Analytics Dashboard",
    description: "An analytics dashboard for crafted to capture users financial data, savings, spending and investments.",
    image: "https://images.unsplash.com/photo-1658677414428-d0ae187034cc?q=80&w=2070&auto=format&fit=crop",
    tags: ["Rest API", "Tailwind", "Typescript", "Javascript"],
    liveUrl: "https://fintech-dashboard-r1v4.onrender.com/",
    githubUrl: "https://github.com/Elite1dev1/fintech-dashboar",
  },
];
