export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
  image: string;
  width: number;
  height: number;
}

export const projectsData: Project[] = [
  {
    name: "CarreraIT",
    description: "Discover your career path in tech.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    url: "https://carrerait.vercel.app/",
    image: "/carrerait.webp",
    width: 500,
    height: 300,
  },
  {
    name: "AstroLife",
    description: "Use the Drake Equation to calculate life probabilities.",
    technologies: ["Python", "Flask", "Bootstrap"],
    url: "https://calculate-astrolife.vercel.app/",
    image: "/astrolife.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Persephone",
    description:
      "Task management app with CRUD functions and input validation.",
    technologies: ["Python", "Flask", "SQLite", "Tailwind CSS"],
    url: "https://github.com/aronmilenait/persephone-app",
    image: "/persephone.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Recipe Realm",
    description: "Recipe finder for global dishes using the Edamam API.",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    url: "https://recipe-realm-nine.vercel.app/",
    image: "/recipe-realm.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Personal blog",
    description: "Random thoughts, software development and Linux.",
    technologies: ["Jekyll"],
    url: "https://aronmilenait.github.io/",
    image: "/personal-blog.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Linux System Manager",
    description: "Scripts to automate common system administration tasks.",
    technologies: ["Python", "Bash"],
    url: "https://github.com/aronmilenait/deb-linux-system-automation",
    image: "/linux-automation.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Switch to Linux",
    description: "Website combining my passions for coding and GNU/Linux.",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    url: "https://switchtolinux.vercel.app/",
    image: "/switch-to-linux.webp",
    width: 500,
    height: 300,
  },
];
