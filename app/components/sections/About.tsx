import React from "react";
import PrimaryBtn from "../buttons/PrimaryBtn";

const About = () => {
  return (
    <section id="about-me" className="w-full h-auto yb-[40px]">
      <div className="wrapper h-full w-full flex md:flex-row flex-col items-center md:gap-[200px] gap-[80px]">
        <div className="block-wrapper relative md:w-[580px] md:h-[580px] w-[294px] h-[294px]">
          <div className="absolute bg-[#7347FF] w-full h-full bottom-[-10px] right-[-10px]"></div>
          <img
            src="/assets/images/profile/profile.jpg"
            className="absolute w-full h-full bg-slate-900"
          />
        </div>
        <div className="flex flex-col md:items-start items-center md:gap-y-[20px] gap-y-[12px]">
          <div className="section-title text-center md:text-start capitalize">
            who I am 🙂
          </div>
          <h1 className="section-head text-center md:text-start">About Me</h1>
          <img
            src="/assets/icons/underline.svg"
            width={250}
            className="mt-[-14px] md:w-[250px] w-[143px]"
          />
          <p className="text-center md:text-start md:text-sm text-base font-[400] text-black md:max-w-[500px] max-w-[100%]">
            I’m a product designer based in Khartoum, Sudan with +3 experience
            in delivering end to end UX/UI design for software products. I’m
            passionate about improving the lives of others through design and
            I’m constantly looking to learn new things everyday.
          </p>
          <div className="flex w-full md:h-auto h-[100px] justify-center md:justify-start items-center md:pt-[0px] pt-[20px]">
            <div
              className={`min-w-[200px] md:min-w-[0px] h-full relative group mt-[20px] cursor-pointer`}
            >
              <div
                className={`absolute bg-[#7347FF] rounded-[100px] min-w-[200px] h-[50px]`}
              ></div>
              <div
                className={`absolute bg-white top-[-5px] left-[-5px] border-2 border-black rounded-[100px] min-w-[200px] h-[50px] flex justify-center items-center group-hover:top-[0px] group-hover:left-[0px] duration-300 ease-in`}
              >
                <span className="text-black text-sm font-semibold">
                  My Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
