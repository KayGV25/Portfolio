import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "./hooks/isVisible";
import isMobile from "./hooks/isMobile";
import SideProcess from "./components/SideProgress";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const checkMobile = isMobile()

  const homeRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  const homeRefVisible = useIsVisible(homeRef)
  const projecReftsVisible = useIsVisible(projectsRef)
  const contactRefVisible = useIsVisible(contactRef)

  const [homeVisible, setHomeVisible] = useState(homeRefVisible)
  const [projectVisible, setProjectVisible] = useState(projecReftsVisible)
  const [contactVisible, setContactVisible] = useState(contactRefVisible)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (homeRefVisible) {
      setHomeVisible(true)
      setProjectVisible(false)
      setContactVisible(false)
      setIsVisible(false)
    }
    if (projecReftsVisible) {
      setProjectVisible(true)
      setHomeVisible(false)
      setContactVisible(false)
      setIsVisible(true)
    }
    if (contactRefVisible) {
      setContactVisible(true)
      setHomeVisible(false)
      setProjectVisible(false)
      setIsVisible(true)
    }
  })


  return (
    <>
      <SideProcess home={homeVisible} contact={contactVisible} projects={projectVisible}/>
      <ThemeToggle/>
      {
        !checkMobile &&
        <div className={`fixed top-7 left-32 transition-all duration-200 ${!homeVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-3xl">Vũ Đăng Khương</p>
          <p className="text-xl font-bold">Software Engineer</p>
        </div>
      }
      <main className="flex flex-col gap-72">
        <div ref={homeRef} className={`${checkMobile ? "mx-5" : "mx-40"}`}>
          <Home/>
        </div>
        <div ref={projectsRef} className={`${checkMobile ? "mx-5" : "mx-40"}`}>
          <Projects/>
        </div>
        <div ref={contactRef} className={`${checkMobile ? "mx-5" : "mx-40"}`}>
          <Contact/>
        </div>
      </main>
    </>
  )
}