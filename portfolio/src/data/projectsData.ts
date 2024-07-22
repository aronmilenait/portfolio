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
    name: "Persephone",
    description:
      "Basic task management app with CRUD functions and input validation.",
    technologies: ["Python", "Flask", "SQLite", "Tailwind CSS"],
    url: "https://github.com/aronmilenait/persephone-app",
    image: "/persephone.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Recipe Realm",
    description:
      "Recipe finder for global dishes and various diets using the Edamam API.",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    url: "https://recipe-realm-nine.vercel.app/",
    image: "/recipe-realm.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Linux System Manager",
    description:
      "Collection of scripts designed to automate common system administration tasks",
    technologies: ["Python", "Bash"],
    url: "https://github.com/aronmilenait/deb-linux-system-automation",
    image: "/linux-automation.webp",
    width: 500,
    height: 300,
  },
  {
    name: "Switch to Linux",
    description: "Website that combines my two passions: coding and GNU/Linux.",
    technologies: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    url: "https://switchtolinux.vercel.app/",
    image: "/switch-to-linux.webp",
    width: 500,
    height: 300,
  },
];
