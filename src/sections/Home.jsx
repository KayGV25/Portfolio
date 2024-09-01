import isMobile from "../hooks/isMobile"

export default function Home(){
    const checkMobile = isMobile()

    return(
        <>
            <div id="home"></div>
            <div className="grid place-items-center w-full h-dvh">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-3 border-l-4 pl-5 hover:cursor-default border-current">
                        <p className="text-6xl">Hello, I'm <span>Khương</span></p>
                        <p className="text-4xl font-mono font-bold">SOFTWARE ENGINEER</p>
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