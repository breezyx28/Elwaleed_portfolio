import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import WhatIDo from "./components/sections/WhatIDo";

export default function Home() {
  return (
    <main className="md:px-[160px] px-[40px] mx-auto w-auto h-auto">
      <Hero />
      <About />
      <WhatIDo />
      <Portfolio />
    </main>
  );
}
