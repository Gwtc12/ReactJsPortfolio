
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProyects";
import { navItems } from "@/data";
import Clients from "../components/Clients";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main 
      className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      suppressHydrationWarning={true}>
      <div className="max-w-7xl w-full" suppressHydrationWarning={true}>
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <TechStack/>
        <Clients/>
        <Experience />
        <Approach/>
      </div>
    </main>
  );
}