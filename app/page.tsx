import About from "./components/sections/About";
import Clients from "./components/sections/Clients";
import Contacts from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Tools from "./components/sections/Tools";
import WhatIDo from "./components/sections/WhatIDo";

export default function Home() {
  return (
    <main className="lg:px-[150px] md:px-[100px] px-[24px] mx-auto w-auto h-auto">
      <Hero />
      <About />
      <WhatIDo />
      <Portfolio />
      <Clients />
      <Process />
      <Contacts />
      <Tools />
    </main>
  );
}
