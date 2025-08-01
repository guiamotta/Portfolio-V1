import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
      </div>
    </main>
  );
}