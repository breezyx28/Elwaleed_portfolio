import React from "react";

const Tools = () => {
  return (
    <section id="tools" className="w-full h-auto mb-[100px]">
      <div className="wrappr">
        <div className="title flex flex-col gap-y-[16px]">
          <p className="text-primary text-[18px] font-semibold capitalize">
            Tools i use
          </p>
          <p className="text-black md:text-5xl text-4xl font-semibold capitalize">
            Work Tools
          </p>
          <div className="flex items-center gap-16 mt-8">
            <img src="/assets/icons/figma.svg" width={50} height={75} />
            <img src="/assets/icons/xd.svg" width={75} height={75} />
            <img src="/assets/icons/vscode.svg" width={75} height={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
