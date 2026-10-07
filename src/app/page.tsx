import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";



export default function Home() {
  return (
     <main className=" py-3">
     <Hero/>
      <About />
         <Skills />
               <Projects />
               <Experience />
               <Education />
    </main>
  );
}
