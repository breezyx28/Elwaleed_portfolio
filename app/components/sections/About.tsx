import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const About = () => {
  return (
    <section id="about-me" className="w-screen h-screen">
      <div className="wrapper flex items-center gap-[200px]">
        <div className="block-wrapper relative w-[500px] h-[500px]">
          <div className="absolute bg-[#24f1c0] w-[500px] h-[500px] bottom-[-25px] right-[-25px]"></div>
          <div className="absolute w-[500px] h-[500px] bg-slate-900"></div>
        </div>
        <div className="flex flex-col gap-y-[20px]">
          <div className="text-primary text-[18px] font-semibold leading-[23.64px] capitalize">
            who I am
          </div>
          <h1 className="text-black text-6xl font-semibold">About Me</h1>
          <p className="text-sm text-black max-w-[500px]">
            I’m a product designer based in Khartoum, Sudan with +3 experience
            in delivering end to end UX/UI design for software products. I’m
            passionate about improving the lives of others through design and
            I’m constantly looking to learn new things everyday.
          </p>
          <div className="">
            <PrimaryBtn shadowColor="bg-[#24f1c0]" text="My Work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
