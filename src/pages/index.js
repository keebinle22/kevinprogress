import Skills from "./components/skills";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Bios from "./components/bio";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-y-auto max-h-screen pb-10 bg-black text-white">
      <main className="flex flex-col container gap-10 justify-center items-center w-1/2">
        <section className="flex items-center min-h-screen w-full" id="home">
          <Bios/>
        </section>
        <section className="min-h-screen w-full" id="workex">
          <Experience/>
        </section>
        <section className="flex items-center min-h-screen w-full" id="skills">
          <Skills/>
        </section>
        <section className="flex items-center min-h-screen w-full" id="projects">
          <Projects/>
        </section>
        <section className="flex items-center h-100" id="contact">
          <Contact/>
        </section>
      </main>
    </div>
  );
}
