import { useState, useEffect } from "react";
import isMobile from "../hooks/isMobile";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle(){
    const [darkMode, setDarkMode] = useState(true);
    const checkMobile = isMobile();

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    
    if(checkMobile) return(
        <div className={`fixed bottom-7 left-6 dark:bg-zinc-50 bg-zinc-800 size-9 rounded-full grid place-items-center`} onClick={() => setDarkMode(prev => !prev)}>
            {darkMode ? <SunIcon className="dark:text-zinc-800 size-6"/> : <MoonIcon className="text-zinc-50 size-6"/>}
        </div>
    )

    return(
        <div className={`fixed bottom-5 left-10`}>
            <p className={`cursor-pointer ${darkMode && "underline"}`} onClick={() => {setDarkMode(true)}}>Dark Mode</p>
            <p className={`cursor-pointer ${!darkMode && "underline"}`} onClick={() => {setDarkMode(false)}}>Light Mode</p>
        </div>
    )
}