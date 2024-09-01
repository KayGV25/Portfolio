import isMobile from "../hooks/isMobile"

export default function SideProcess({home, contact, projects}){
    const checkMobile = isMobile();
    return (
        <div className={`top-0 left-10 grid place-items-center ${checkMobile ? "w-full h-16 sticky bg-gradient-to-b dark:from-zinc-950 from-zinc-50" : "w-14 h-dvh fixed"}`}>
            <div className={`flex ${checkMobile ? "flex-row" : "flex-col"} items-center gap-2`}>
                <a href="#home" className={`${home && "font-bold text-lg"}`}>Home</a>
                <div className={`${checkMobile ? "w-10 border-t-2" : "w-0 h-20 border-l-2"} border-current`}></div>
                <a href="#projects" className={`${projects && "font-bold text-lg"}`}>Projects</a>
                <div className={`${checkMobile ? "w-10 border-t-2" : "w-0 h-20 border-l-2"} border-current`}></div>
                <a href="#contact" className={`${contact && "font-bold text-lg"}`}>Contact</a>
            </div>
        </div> 
    )
}