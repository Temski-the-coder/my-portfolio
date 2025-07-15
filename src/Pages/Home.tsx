import { ContactSection } from "../Components/ContactSection"
import { Footer } from "../Components/Footer"
import { MainComponent } from "../Components/MainComponent"

import { NavBar } from "../Components/NavBar"
import { StarBackground } from "../Components/StarBackground"
import { ThemeToggle } from "../Components/ThemeToggle"
import { MainPage } from "../Main/MainPage"


const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
         {/* Background Effect */}
        <StarBackground />
        {/* Background Effect */}
        
         {/* NavBar */}
        <NavBar />
        {/* NavBar */}
        
        {/* Theme toggle */}
        <ThemeToggle />
        {/* Theme toggle */}
       
        
        {/* Main Section */}
          <MainComponent />
          <MainPage />
        {/* Main Section */}

        {/* contact section */}
        <ContactSection />
        {/* contact section */}

        {/* Footer */}
          <Footer />
        {/* Footer */}
    </div>
  )
}

export default Home