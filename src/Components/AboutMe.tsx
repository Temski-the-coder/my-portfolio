import { IoIosCode } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { GiBriefcase } from "react-icons/gi";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-blue-600 dark:text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-semibold">
              I am an innovative Software Developer with a strong drive for
              creating efficient, scalable, and user-friendly web applications.
              With experience across both frontend and backend technologies, I
              specialize in building dynamic websites and applications that
              solve real-world problems and help clients meet their needs by
              delivering high-quality software solutions and applications that
              put user experience first throughout the entire process.
            </h3>
            <p className="text-muted-foreground">
              I take pride in my ability to write clean code, troubleshoot bugs
              with precision, and continuously learn emerging technologies to
              stay at the forefront of development trends.
            </p>
            <p className="text-muted-foreground">
              Outside of technical work, I enjoy solving highly complex issues,
              collaboration on cross-functional teams, and continually learning
              new tools and paradigms to stay on top in the ever-evolving world
              of technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="bg-foreground text-foreground dark:cosmic-button">
                {""}
                Get in Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-foreground .dark:border-primary hover:bg-primary/10 transition-colors duration-300 text-foreground"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoIosCode className="w-6 h-6 text-foreground dark:text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Web Development</h4>
                  <p className="text-sm text-muted-foreground">
                    My skills are well-rounded, covering front-end and back-end
                    development, and my work includes designing smooth user
                    experiences backed by strong server-side logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaUserCircle className="w-6 h-6 text-foreground dark:text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">User-Centric Design</h4>
                  <p className="text-sm text-muted-foreground">
                    I prioritize user experience in all my projects, ensuring
                    that applications are intuitive, accessible, and engaging.
                    Above all, I'm committed to delivering solutions that not
                    only work but also add real value to users and businesses
                    alike.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GiBriefcase className="w-6 h-6 text-foreground dark:text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold">Professional Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    With a background in both front-end and back-end
                    development, I have a proven track record of delivering
                    high-quality software solutions that meet client needs and
                    exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
