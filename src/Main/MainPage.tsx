import { AboutMe } from "../Components/AboutMe"
import { ProjectComponent } from "../Components/ProjectComponent"
import { SkillSection } from "../Components/SkillSection"


export const MainPage = () => {
    return (
        <section id="main">
            {/* About Me Section */}
            <AboutMe />
            {/* About Me Section */}

            {/* Skills Section */}
            <SkillSection />
            {/* Skills Section */}

            {/* Projects Section */}
            <ProjectComponent />
            {/* Projects Section */}
        </section>
    )
}