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
    company: "bitbug",
    location: "Miami, USA (Remote)",
    role: "Full Stack Developer",
    timeframe: "August 2024 - Present",
    responsibilities: [
      "Development of web applications using PHP, JavaScript, and CSS.",
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
