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
    role: "Front End Developer",
    timeframe: "June 2023 - August 2024",
    responsibilities: [
      "Front-end development using JavaScript, TypeScript, Vite, React.js and Tailwind CSS.",
      "Back-end development utilizing Nest.js, Docker, TypeORM, SQLite and MySQL, mainly in training projects.",
      "Testing using Jest and Cypress.",
    ],
    companyUrl: "https://www.linkedin.com/company/biggertech/",
  },
];
