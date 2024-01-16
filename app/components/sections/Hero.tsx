import React from "react";
import { Be, Dribbble } from "iconsax-react";
import SocialmediaLinks from "../footer/SocialmediaLinks";
import HeroFloatingCards from "../cards/HeroFloatingCards";
import HeroFloatingCardsSM from "../cards/HeroFloatingCardsSM";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center"
    >
      <div className="absolute hero-grad top-0 left-0 z-0"></div>
      <div className="flex z-10">
        <div className="wrapper w-full flex flex-col justify-center items-center md:items-start gap-y-[28px]">
          <p className="text-primary text-center md:text-start md:text-[65px] text-[28px] md:max-w-[70vw] max-w-[100vw] md:pr-[40px] pr-[0px] md:font-[500] font-[600]">
            Hey there, I’m Alwaleed Taha
          </p>
          <div className="flex flex-col gap-y-[20px]">
            <p className="md:text-[28px] text-center md:text-start text-[18px] text-black font-[400] md:max-w-[70%] max-w-[100%] md:leading-[46px] leading-[28.66px]">
              i’m a product designer, Bringing your ideas to live through the
              design 🎨{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-[24px] md:hidden">
            <HeroFloatingCardsSM
              type="yellow"
              text="+4 Years Experience"
              position="relative"
            />
            <HeroFloatingCardsSM
              type="blue"
              text="UIUX Designer"
              position="relative"
            />
          </div>
          <div className="">
            <img
              src="/assets/icons/Arrow.svg"
              className="md:w-[140px] w-[52px]"
            />
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <p className="section-title text-center md:text-start">
              follow me on
            </p>
            <div className="flex items-center gap-[16px]">
              <SocialmediaLinks
                link={"https://www.behance.net/alwaleedtaha"}
                icon={
                  <Be
                    size="24"
                    className="md:w-[24px] w-[17.83px]"
                    color="#7347FF"
                  />
                }
              />
              <SocialmediaLinks
                link={"https://dribbble.com/Alwaleed-Taha"}
                icon={
                  <Dribbble
                    size="24"
                    className="md:w-[24px] w-[17.83px]"
                    color="#7347FF"
                  />
                }
              />
              <SocialmediaLinks
                link={"https://www.linkedin.com/in/alwaleed-taha-92248b217/"}
                icon={<span className="text-primary md:text-[24px]">in</span>}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-[200px] md:block hidden">
          <HeroFloatingCards
            type="blue"
            text="UIUX Designer"
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
