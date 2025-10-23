import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import EcommerceScreenshot from "../assets/my-ecommerce-web.png";
import advice from "../assets/advice-generator-screenshot.png";
import MealsNaija from "../assets/mealsnaija-img.png";

const Projects = [
  {
    Id: 1,
    Title: "E-commerce M.E.R.N Website",
    Description: "M.E.R.N stack e-commerce website.",
    Image: [
      {
        url: EcommerceScreenshot,
        alt: "E-commerce M.E.R.N Website Screenshot",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Express.js",
      "React-Router",
      "tailwindcss",
      "Framer Motion",
    ],
    DemoUrl: "https://mivine-essentials.vercel.app/",
    GitHubUrl:
      "https://github.com/Temski-the-coder/Mivine-Essentials",
  },

  {
    Id: 2,
    Title: "T.O.M Codes Advice Generator App",
    Description: "A website that generates special advice.",
    Image: [
      {
        url: advice,
        alt: "Advice Generator website",
      },
    ],
    tags: ["React", "Typescript", "Tailwindcss", "adviceSlipAPI"],
    DemoUrl: "https://tom-advice-generator-app.vercel.app/",
    GitHubUrl: "https://github.com/Temski-the-coder/advise-app.git",
  },

  {
    Id: 3,
    Title: "MealsNaija",
    Description: "A website for a private chef in Nigeria.",
    Image: [
      {
        url: MealsNaija,
        alt: "MealsNaija website",
      },
    ],
    tags: ["React", "javascript", "Tailwindcss", "Framer Motion", "EmailJS", "css", "Toaster"],
    DemoUrl: "https://mealsnaija.vercel.app",
    GitHubUrl: "https://github.com/Temski-the-coder/mealsnaija.git",
  },
];

export const ProjectComponent = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gap-3">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foregrond mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have worked on. Each project showcases
          my skills in web development, design, and problem-solving. Each
          project is a testament to my dedication to creating functional and
          visually appealing solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card p-6 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={project.Image[0].url}
                  alt={project.Image[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.Title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.Description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.DemoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-purple-950 transition-colors duration-300"
                  >
                    <TbExternalLink />
                  </a>
                  <a
                    href={project.GitHubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-purple-950 transition-colors duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button bg-purple-950 w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Temski-the-coder"
          >
            check out my github <IoMdArrowRoundForward />
          </a>
        </div>
      </div>
    </section>
  );
};
