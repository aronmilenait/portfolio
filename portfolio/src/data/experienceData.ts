export interface Experience {
  company: string;
  location: string;
  role: string;
  timeframe: string;
  responsibilities: string[];
}

export const workExperience: Experience[] = [
  {
    company: "Connect Nodes IO",
    location: "Miami, USA",
    role: "Back End Developer",
    timeframe: "July 2024 - Present",
    responsibilities: [
      "Development of back-end services using Express.js and SQLite with JavaScript and TypeScript.",
      "Efficient web scraping implementation with Puppeteer, improving the quality and speed of collected data.",
      "Management of API requests using Postman for endpoint testing and documentation.",
    ],
  },
  {
    company: "Bigger",
    location: "Sydney, Australia",
    role: "Web Developer",
    timeframe: "June 2023 - August 2024",
    responsibilities: [
      "Engage in full-stack development, specializing in front-end technologies like TypeScript, React, Vite, and Tailwind CSS, alongside back-end development using NestJS, TypeORM, Docker, and MySQL.",
      "Utilize low-code platforms such as Webflow, WordPress, and LeadPages for diverse web development projects ranging from simple landing pages to complex websites.",
      "WordPress website management tasks, including troubleshooting design issues, updating plugins and WordPress versions, migrating websites between hosting providers, and enhancing performance for both mobile and desktop platforms.",
      "Execute targeted email marketing campaigns through platforms like Vero and Liquid, optimizing content to enhance audience engagement.",
      "Implement testing strategies using Cypress and Jest to ensure the reliability and functionality of web applications.",
    ],
  },
];
