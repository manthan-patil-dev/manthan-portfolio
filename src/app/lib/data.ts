export const personalInfo = {
    name: "Manthan Rajesh Patil",
    titles: [
        "Full-Stack Developer",
        1000,
        "AI App Builder",
        1000,
        "Computer Engineering Student",
        1000,
    ],
    description:
        "Diploma student in Computer Engineering at Bhausaheb Vartak Polytechnic, building internship-ready and commercial web products with React, Next.js, backend systems, and AI integrations.",
    email: "manthan@example.com", // Update with your actual email
    github: "https://github.com/manthanpatil", // Update with your GitHub
    linkedin: "https://linkedin.com/in/manthanpatil", // Update with your LinkedIn
    whatsapp: "+910000000000", // Update with your actual number
};

export const skills = {
    Languages: ["JavaScript", "TypeScript", "Java", "Python", "SQL"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Supabase", "Prisma", "PostgreSQL"],
    DevOps: ["Docker", "GitHub", "Vercel"],
};

export const experience = [
    {
        company: "JPMorgan Chase",
        role: "Software Engineering Virtual Intern",
        date: "2023",
        description: "Completed virtual experience program focusing on financial data feeds and visual charts.",
        tech: ["Python", "TypeScript", "React"],
    },
    {
        company: "MasterCard",
        role: "Cybersecurity Analyst Virtual Intern",
        date: "2023",
        description: "Simulated cybersecurity threat analysis, phishing identification, and security architecture.",
        tech: ["Security Analysis", "Network Security"],
    },
];

export const projects = [
    {
        id: "gesture-call-ai",
        title: "Gesture Call AI",
        description: "A gesture-controlled video calling application.",
        tech: ["React", "Next.js", "WebRTC"],
        github: "https://github.com",
        live: "https://demo.com",
        outcome: "Enabled touchless communication through computer vision.",
        details: "Integrated browser-based gesture recognition with a real-time video streaming architecture to create a seamless, hands-free user experience.",
    },
    {
        id: "fakenews-buster",
        title: "FakeNews Buster",
        description: "AI-powered tool that analyzes news articles to determine the probability of misinformation.",
        tech: ["Python", "Next.js", "Tailwind"],
        github: "https://github.com",
        live: "https://demo.com",
        outcome: "Achieved 92% accuracy in detecting known fake news articles.",
        details: "Utilized NLP models and a highly responsive front-end for immediate user feedback and data visualization.",
    },
    {
        id: "lumina-ai",
        title: "Lumina AI Study Companion",
        description: "An intelligent study aid that generates flashcards and quizzes from uploaded notes.",
        tech: ["Next.js", "Supabase", "OpenAI API"],
        github: "https://github.com",
        live: "https://demo.com",
        outcome: "Helped students significantly reduce study prep time.",
        details: "Implemented secure user authentication and complex document parsing algorithms to feed context into the AI engine.",
    },
    {
        id: "eduforge-ai",
        title: "EduForge AI",
        description: "An academic workflow platform designed to streamline student assignments and schedules.",
        tech: ["React", "Node.js", "PostgreSQL"],
        github: "https://github.com",
        live: "https://demo.com",
        outcome: "Automated standard academic tracking tasks.",
        details: "Built a relational database structure to handle courses, deadlines, and automated reminders while maintaining a clean, accessible UI.",
    },
];
export const certificates = [
  {
    title: "Software Engineering Virtual Internship",
    issuer: "JPMorgan Chase & Co.",
    date: "2023",
    // We use %20 to safely represent spaces in the file name for the URL
    link: "/Certificate/JPMorgan%20SEJS.pdf", 
  },
  {
    title: "Software Engineering Virtual Internship",
    issuer: "Skyscanner",
    date: "2023",
    link: "/Certificate/Skyscanner%20SEJS.pdf",
  },
  {
    title: "Achievement Certificate",
    issuer: "Manthan Patil",
    date: "2024",
    link: "/Certificate/Certificate%20of%20Manthan%20Patil.pdf",
  }
];