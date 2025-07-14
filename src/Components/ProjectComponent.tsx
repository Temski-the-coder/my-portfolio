import { TbExternalLink } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

const Projects = [
  {
    Id: 1,
    Title: "Project One",
    Description: "Project is a work in progress.",
    Image: "https://via.placeholder.com/150",
    tags: ["", "", ""],
    DemoUrl: "#",
    GitHubUrl: "#",
  },

  {
    Id: 2,
    Title: "Project Two",
    Description: "Project is a work in progress.",
    Image: "https://via.placeholder.com/150",
    tags: ["", "", ""],
    DemoUrl: "#",
    GitHubUrl: "#",
  },

  {
    Id: 3,
    Title: "Project Three",
    Description: "Project is a work in progress.",
    Image: "https://via.placeholder.com/150",
    tags: ["", "", ""],
    DemoUrl: "#",
    GitHubUrl: "#",
  },
];

export const ProjectComponent = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gap-3">
          Featured <span className="text-blue-800 dark:text-primary">Projects</span>
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
                  src={project.Image}
                  alt={project.Title}
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
