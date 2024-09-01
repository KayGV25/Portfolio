import isMobile from "../hooks/isMobile"
import { projects } from "../assets/projects"
import Project from "../components/Project"

export default function Projects(){
    const checkMobile = isMobile()

    return(
        <>
            <div id="projects"></div>
            <div className={`${!checkMobile && "flex justify-end"}`}>
                {/* Skill */}
                <section className={`${ !checkMobile && "w-2/4 mx-0"}`}>
                    <h1 className="text-4xl font-bold">Projects</h1>
                    {
                        projects.map((project, key) => {
                            let { pName, role, description, time, links } = project
                            return <Project pName={pName} role={role} description={description} time={time} links={links} key={key}/>
                        })
                    }
                </section>
            </div>
        </>
    )
}