export default function About() {
  const paragraphClasses = "text-lg md:text-xl leading-relaxed";
  const titleClasses = "font-bold text-3xl md:text-3xl mb-2 text-pink-900";
  const jobTitleClasses = "font-bold text-2xl md:text-2xl text-pink-700 mt-4";
  const jobRoleClasses = "font-bold text-2xl md:text-2xl text-pink-800 mb-2";
  const timelineClasses = "italic text-xl md:text-xl text-pink-600";
  const responsibilityClasses = "font-medium text-lg md:text-lg mt-4";

  return (
    <section className="mt-8 bg-gradient-to-r from-orange-50 to-pink-100 flex flex-col justify-center items-center p-4 text-pink-900">
      <h1 className="font-bold text-4xl md:text-6xl m-8">My Resume</h1>
      <div className="space-y-6 max-w-2xl bg-white p-8 rounded-xl shadow-md">
        {/* About */}
        <p className={paragraphClasses}>
          I’m a Software Developer with over a year of work experience in the
          field.
        </p>
        <p className={paragraphClasses}>
          Besides coding, I&apos;ve been using GNU/Linux as my operating system
          since 2015, which gives me a solid understanding and experience in
          that area. At the moment, I&apos;m using Fedora.
        </p>
        <p className={paragraphClasses}>
          I’m currently studying AWS Cloud and Software Architecture.c
        </p>

        {/* Work Experience */}
        <div className="mt-8">
          <h2 className={titleClasses}>Experience</h2>
          {/* Founder at CarreraIT */}

          <p className={jobTitleClasses}>CarreraIT</p>
          <p className={jobRoleClasses}>Founderc</p>
          <p className={timelineClasses}>(September 2024 - Present)</p>
          <p className="font-medium text-lg md:text-lg mt-4">
            My love for the field led me to create and develop CarreraIT, a
            platform for people from Hispanic countries who want to work in tech
            or who already do. It provides surveys to receive feedback on career
            development, free resources, and orientation guides.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              Developing the platform using Next.js, TypeScript, React.js, and
              Tailwind CSS, adhering to SOLID principles and focusing on
              building a maintainable architecture.
            </li>
            <li className={responsibilityClasses}>
              Handling deployment through Vercel.
            </li>
            <li className={responsibilityClasses}>
              Writing orientation guides and creating surveys.
            </li>
            <li className={responsibilityClasses}>
              Searching and incorporating high-quality, free resources.
            </li>
          </ul>

          {/* Full Stack Developer at bitbug */}

          <p className={jobTitleClasses}>bitbug</p>
          <p className={jobRoleClasses}>Full Stack Developer</p>
          <p className={timelineClasses}>(August 2024 - Present)</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              Participate in developing an AI platform using PHP, JavaScript,
              HTML, and CSS.
            </li>
            <li className={responsibilityClasses}>
              Create and manage tickets to organize my work using Trello and
              follow Scrum and Agile methodologies.
            </li>
            <li className={responsibilityClasses}>
              Writing documentation on best development practices to ensure
              high-quality code, and maintaining documentation for existing
              projects to help new developers adapt quickly and understand the
              reasoning behind the implementation.
            </li>
          </ul>

          {/* Front End Developer at Bigger */}

          <p className={jobTitleClasses}>Bigger</p>
          <p className={jobRoleClasses}>Front End Developer</p>
          <p className={timelineClasses}>(June 2023 - August 2024)</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>
              Participate in front-end development using Vite, TypeScript,
              JavaScript, and Tailwind CSS following the SOLID principles.
            </li>
            <li className={responsibilityClasses}>
              Backend development using Nest.js, Docker, TypeORM, MySQL and
              SQLite in training projects.
            </li>
            <li className={responsibilityClasses}>
              Testing with Cypress and Jest to ensure the quality and
              functionality of web applications.
            </li>
            <li className={responsibilityClasses}>
              Create and manage tickets to organize my work using ClickUp and
              follow Scrum and Agile methodologies.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mt-8">
          <h3 className={titleClasses}>Education</h3>

          {/* OSSU */}
          <p className={jobTitleClasses}>Open Source Society University</p>
          <p className={jobRoleClasses}>Computer Science</p>
          <p className={timelineClasses}>(October 2024 - 2O28.)</p>

          {/* UTN */}
          <p className={jobTitleClasses}>Universidad Tecnológica Nacional</p>
          <p className={jobRoleClasses}>
            Associate&apos;s Degree in Programming
          </p>
          <p className={timelineClasses}>(May 2024 - October 2024)</p>
        </div>

        {/* Languages */}
        <div className="mt-8">
          <h4 className={titleClasses}>Languages</h4>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li className={responsibilityClasses}>English: C2</li>
            <li className={responsibilityClasses}>Spanish: Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
