import React from "react";
import WhatIDoCard from "../cards/WhatIDoCard";

const WhatIDo = () => {
  return (
    <section
      id="what-i-do"
      className="w-full md:h-screen h-auto py-[50px] border-b-2"
    >
      <div className="wrapper w-full flex flex-col md:gap-y-[0px] gap-y-[32px]">
        <div className="md:order-1 order-2 flex md:flex-row flex-col md:justify-between items-center gap-y-[32px] md:gap-y-[0px]">
          <WhatIDoCard
            title="UI Design"
            icon="/assets/icons/do-2.svg"
            description="after exciting UX design process, i start doing UI design part. Good
        design should be aesthetic."
          />
          <WhatIDoCard
            title="Basic Code"
            icon="/assets/icons/flower.svg"
            description="basic code is like the foundation of any 
                    software or website. It s the simple stuff that 
                    makes everything else work."
          />
        </div>
        <div className="md:order-2 order-1 flex flex-col items-center md:gap-y-[80px] gap-y-[40px]">
          <div className="flex flex-col gap-y-[22px] items-center">
            <div className="section-head">
              <p>What I Do</p>
              <img
                src="/assets/icons/underline.svg"
                width={210}
                className="mt-[10px] md:w-[250px] w-[143px]"
              />
            </div>
            <div className="description text-black text-sm text-center max-w-[400px]">
              There’s no style over substance here. I bring together form and
              the function to create something that looks good and performs
              brilliantly, and easy to use.
            </div>
          </div>

          <WhatIDoCard
            title="UX Design"
            icon="/assets/icons/do-1.svg"
            description="I Follow up the UX Design process from 
            user research and wireframe and 
            prototype."
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
