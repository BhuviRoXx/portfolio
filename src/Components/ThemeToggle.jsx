import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { cn } from '../lib/utlils';

export const ThemeToggle = () => {

    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect( () => {
        const storedItem = localStorage.getItem("theme");
        if(storedItem === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else{
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    },[] )

    const setColorMode = () => {
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
        
    }

    return (
        <button onClick={setColorMode}  className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}>{
            isDarkMode? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-600"/>
        }</button>
    )
}


