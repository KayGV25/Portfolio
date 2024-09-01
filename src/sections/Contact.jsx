import isMobile from "../hooks/isMobile"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline"

export default function Contact(){
    const checkMobile = isMobile()

    return(
        <>
            <div id="contact"></div>
            <div className={`${!checkMobile && "flex justify-end"}`}>
                {/* Contact */}
                <section className={`${ !checkMobile && "w-2/4 mx-0"}`}>
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <div className="flex flex-col w-full select-none">
                        <div className="flex justify-end">
                            <div className="flex items-center cursor-pointer hover:underline gap-1" onClick={() => window.open("https://www.linkedin.com/in/kh%C6%B0%C6%A1ng-v%C5%A9-1b53371a8/", "_blank")}>
                                <p>Linkedin</p>
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex items-center cursor-pointer hover:underline gap-1" onClick={() => window.open("https://github.com/KayGV25", "_blank")}>
                                <p>GitHub</p>
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex items-center cursor-pointer hover:underline gap-1" onClick={() => window.open("https://www.facebook.com/profile.php?id=100011628282481", "_blank")}>
                                <p>Facebook</p>
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex items-center cursor-pointer hover:underline gap-1" onClick={() => {navigator.clipboard.writeText("khuongvudang25@gmail.com"); alert("Email has been copied to clipboard")}}>
                                <p>Email</p>
                                <ArrowTopRightOnSquareIcon className="size-4"/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}