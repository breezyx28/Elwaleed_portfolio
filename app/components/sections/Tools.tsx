import React from "react";

const Tools = () => {
  return (
    <section id="tools" className="w-full h-auto mb-[100px]">
      <div className="wrappr">
        <div className="title flex flex-col gap-y-[16px]">
          <p className="section-title capitalize">Tools i use 🔧</p>
          <p className="section-head capitalize">Work Tools</p>
          <div className="flex items-center gap-16 mt-8">
            <img
              src="/assets/icons/figma.svg"
              className="md:w-[71px] w-[47px]"
            />
            <img src="/assets/icons/xd.svg" className="md:w-[110px] w-[53px]" />
            <img
              src="/assets/icons/vscode.svg"
              className="md:w-[108px] w-[52px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
