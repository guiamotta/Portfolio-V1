import Image from "next/image";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";

import { FloatingDock } from "@/components/ui/floating-dock";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Education/>
      </div>
    </main>
  );
}