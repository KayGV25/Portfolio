import isMobile from "../hooks/isMobile"
import { useState } from "react"

export default function Home(){
    const checkMobile = isMobile()
    const [isOpen, setIsOpen] = useState(false)

    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"

    return(
        <>
            {
                isOpen &&
                <div className="fixed inset-0">
                    <div className="relative w-full h-full grid place-items-center">
                        <div className="w-full h-full bg-zinc-800 bg-opacity-75 backdrop-blur-sm grid place-items-center transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" onClick={() =>  setIsOpen(false)}>
                        </div>
                        <img src="/Avatar.jpg" alt="Avatar"
                        className="size-80 z-20 absolute object-cover" />
                    </div>
                </div>
            }
            <div id="home"></div>
            <div className="grid place-items-center w-full h-dvh gap-0">
                <div className="flex flex-wrap justify-center gap-5">
                    <div className="size-28">
                        <img src="/Avatar.jpg" 
                        alt="Avatar" className="size-28 rounded-full cursor-pointer object-cover" onClick={() => setIsOpen(true)}/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3 border-l-4 pl-5 hover:cursor-default border-current">
                            <p className="text-6xl">Hello, I'm <span>Khương</span></p>
                            <p className="text-4xl font-mono font-bold">SOFTWARE ENGINEER</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${!checkMobile && "flex justify-end"}`}>
                {/* About */}
                <section className={`${ !checkMobile && "w-2/4 mx-0"}`}>
                    <h1 className="text-4xl font-bold">About</h1>
                    <p className=" text-justify">
                        I'm currently an undergraduate student at <span className="font-bold hover:cursor-pointer" onClick={() => {window.open("https://www.uit.edu.vn/tong-quan-ve-truong-dh-cong-nghe-thong-tin", "_blank")}}>University of Information Technology</span> major in <span className="font-bold">Computer Science</span>. During my study time I've gained many relevant skills and knowledges in the field. However, I vision myself as a "Forever Student", eager to learn and update on knowledges and technologies.
                    </p>
                </section>
            </div>
        </>
    )
}