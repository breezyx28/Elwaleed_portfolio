import React from "react";
import ClientCard from "../cards/ClientCard";
import ProcessCard from "../cards/ProcessCard";

const Process = () => {
  return (
    <section id="process" className="w-full h-full h-auto mb-[60px]">
      <div className="wrapper flex flex-col md:gap-y-[52px] gap-y-[32px]">
        <div className="flex flex-col md:gap-y-[16px] gap-y-[8px]">
          <p className="text-center md:text-start section-title capitalize">
            How it works ✍
          </p>
          <p className="text-center md:text-start section-head capitalize">
            My Work Process
          </p>
        </div>
        <div className="h-full w-full grid md:grid-cols-3 grid-cols-1 md:gap-[32px] gap-[0px]">
          <ProcessCard />
          <ProcessCard imgSrc="/assets/icons/resize.svg" />
          <ProcessCard imgSrc="/assets/icons/do-3.svg" />
        </div>
      </div>
    </section>
  );
};

export default Process;
