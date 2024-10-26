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
    role: "Founder",
    timeframe: "September 2024 - Present",
    responsibilities: [
      "My love for the field led me to create and develop CarreraIT, a platform for people from Hispanic countries who want to work in tech or who already do. It provides surveys to receive feedback on career development, free resources, and orientation guides.",
      "Developing the platform using Next.js, TypeScript, React.js, and Tailwind CSS, adhering to SOLID principles and focusing on building a maintainable architecture.",
      "Handling deployment through Vercel.",
      "Writing orientation guides and creating surveys.",
      "Searching and incorporating high-quality, free resources."
    ],
    companyUrl: "https://carrerait.lat",
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
