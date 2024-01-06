import React from "react";
import { Be, Dribbble } from "iconsax-react";
import SocialmediaLinks from "../footer/SocialmediaLinks";
import HeroFloatingCards from "../cards/HeroFloatingCards";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-[calc(100vh-140px)] flex flex-col gap-y-[40px] justify-center"
    >
      <div className="flex">
        <div className="wrapper w-full flex flex-col gap-y-[25px]">
          <h1 className="text-primary md:text-6xl text-4xl max-w-[80vw] pr-[40px] font-bold w-full">
            Hey there, I’m Alwaleed Taha
          </h1>
          <div className="flex flex-col gap-y-[20px]">
            <p className="text-3xl text-black/80 font-[400] max-w-[50%] leading-[46px]">
              i’m a product designer, Bringing your ideas to live through the
              design{" "}
            </p>
          </div>
          <div className="">
            <img
              src="/assets/icons/Arrow.svg"
              className="md:w-[150px] w-[75px]"
            />
          </div>
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
        </div>
        <div className="absolute right-[200px] md:block hidden">
          <HeroFloatingCards
            type="blue"
            text="+12 Projects"
            position="top-[50px] right-[0px]"
          />
          <HeroFloatingCards
            type="yellow"
            text="+3 Years Experience"
            position="top-[250px] right-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
