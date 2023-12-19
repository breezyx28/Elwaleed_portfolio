import React from "react";
import ClientCard from "../cards/ClientCard";
import ProcessCard from "../cards/ProcessCard";

const Process = () => {
  return (
    <section id="process" className="w-full h-full h-auto">
      <div className="wrapper flex flex-col gap-y-[28px]">
        <div className="title flex flex-col gap-y-[16px]">
          <p className="text-primary text-[18px] font-semibold capitalize">
            How it works
          </p>
          <p className="text-black text-5xl font-semibold capitalize">
            My Work Process
          </p>
        </div>
        <div className="h-full w-full grid grid-cols-3 gap-[32px]">
          <ProcessCard />
          <ProcessCard imgSrc="/assets/icons/resize.svg" />
          <ProcessCard imgSrc="/assets/icons/do-3.svg" />
        </div>
      </div>
    </section>
  );
};

export default Process;
