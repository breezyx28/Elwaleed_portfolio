import React from "react";
import { Be, Dribbble } from "iconsax-react";
import SocialmediaLinks from "../footer/SocialmediaLinks";
import HeroFloatingCards from "../cards/HeroFloatingCards";
import HeroFloatingCardsSM from "../cards/HeroFloatingCardsSM";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[calc(100vh-140px)] flex flex-col gap-y-[40px] justify-center"
    >
      <div className="flex">
        <div className="wrapper w-full flex flex-col items-center md:items-start gap-y-[25px]">
          <h1 className="text-primary text-center md:text-start md:text-[80px] text-[28px] md:max-w-[80vw] max-w-[100vw] md:pr-[40px] pr-[0px] md:font-[500] font-[600]">
            Hey there, I’m Alwaleed Taha
          </h1>
          <div className="flex flex-col gap-y-[20px]">
            <p className="md:text-3xl text-center md:text-start text-[18px] text-black/80 font-[400] md:max-w-[50%] max-w-[100%] md:leading-[46px] leading-[28.66px]">
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
              className="md:w-[150px] w-[75px]"
            />
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <p className="text-primary text-center md:text-start text-[18px] font-semibold leading-[23.64px]">
              follow me on
            </p>
            <div className="flex items-center gap-[16px]">
              <SocialmediaLinks
                link={"#"}
                icon={
                  <Be
                    size="24"
                    className="md:w-[24px] w-[17.83px]"
                    color="#7347FF"
                  />
                }
              />
              <SocialmediaLinks
                link={"#"}
                icon={
                  <Dribbble
                    size="24"
                    className="md:w-[24px] w-[17.83px]"
                    color="#7347FF"
                  />
                }
              />
              <SocialmediaLinks
                link={"#"}
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
