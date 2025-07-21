import { Navbar } from "../Components/NavBar"
import { StarBackGround } from "../Components/StarBackGround"
import { ThemeToggle } from "../Components/ThemeToggle"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackGround/>
        <Navbar/>
    </div>
  )
}