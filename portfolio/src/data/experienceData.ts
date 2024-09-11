export interface Experience {
  company: string;
  location: string;
  role: string;
  timeframe: string;
  responsibilities: string[];
  companyUrl?: string;
}

export const workExperience: Experience[] = [
  {
    company: "CarreraIT",
    location: "Argentina",
    role: "Full Stack Developer",
    timeframe: "September 2024 - Present",
    responsibilities: [
      "CarreraIT is a platform I created as a personal project to help individuals from Hispanic countries discover their career paths in the tech field. It offers free, high-quality resources, career orientation guides, and a survey that provides personalized recommendations based on their responses.",
      "Develop the platform using Next.js, TypeScript, React.js, and Tailwind CSS.",
      "Write orientation guides in Spanish, my native language.",
      "Search and incorporate for high-quality, free resources.",
    ],
    companyUrl: "https://carrerait.vercel.app",
  },
  {
    company: "bitbug",
    location: "Miami, USA (Remote)",
    role: "Full Stack Developer",
    timeframe: "August 2024 - Present",
    responsibilities: [
      "Back-end development using PHP.",
      "Front-end development using HTML, CSS and JavaScript.",
    ],
    companyUrl: "https://www.linkedin.com/company/bitbug/",
  },
  {
    company: "Bigger",
    location: "Sydney, Australia (Remote)",
    role: "Web Developer",
    timeframe: "June 2023 - August 2024",
    responsibilities: [
      "Engage in full-stack development, specializing in front-end technologies like TypeScript, React, Vite, and Tailwind CSS, alongside back-end development using NestJS, TypeORM, Docker, and MySQL.",
      "Implement testing strategies using Cypress and Jest.",
      "Using Webflow and WordPress for diverse web development projects ranging from simple landing pages to complex websites.",
      "WordPress website management tasks, including troubleshooting design issues, updating plugins and WordPress versions, migrating websites between hosting providers, and enhancing performance for both mobile and desktop platforms.",
    ],
    companyUrl: "https://www.linkedin.com/company/biggertech/",
  },
];
