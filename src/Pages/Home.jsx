import { AboutSection } from "../Components/AboutSection"
import { HeroSection } from "../Components/HeroSection"
import { Navbar } from "../Components/NavBar"
import { SkillsSection } from "../Components/SkillSection"
import { StarBackGround } from "../Components/StarBackGround"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackGround/>
        <Navbar/>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
    </div>
  )
}