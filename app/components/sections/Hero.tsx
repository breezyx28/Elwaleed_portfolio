import React from "react";
import { Be, Dribbble } from "iconsax-react";
import SocialmediaLinks from "../footer/SocialmediaLinks";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-[calc(100vh-140px)] flex flex-col gap-y-[40px] justify-center"
    >
      <h1 className="text-primary text-7xl font-bold">
        Hey there, I’m Alwaleed Taha
      </h1>
      <div className="flex flex-col gap-y-[20px]">
        <p className="text-3xl text-black/80 font-[400] max-w-[50%] leading-[46px]">
          i’m a product designer, Bringing your ideas to live through the design{" "}
        </p>
      </div>
      <div className=""></div>
      <div className="flex flex-col gap-y-[16px]">
        <p className="text-primary text-[18px] font-semibold leading-[23.64px]">
          follow me on
        </p>
        <div className="flex items-center gap-[16px]">
          <SocialmediaLinks
            link={"#"}
            icon={<Be size="22" color="#463eff" />}
          />
          <SocialmediaLinks
            link={"#"}
            icon={<Dribbble size="22" color="#463eff" />}
          />
          <SocialmediaLinks
            link={"#"}
            icon={<span className="text-primary text-[22px]">in</span>}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
