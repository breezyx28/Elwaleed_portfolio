import Image from "next/image";
import React from "react";

type TProcessProps = {
  imgSrc?: string;
  title?: string;
  description?: string;
};

const ProcessCard = ({ title, imgSrc, description }: TProcessProps) => {
  return (
    <div className="md:max-w-[400px] max-w-[1000px] h-auto flex flex-col justify-center items-center gap-[28px]">
      <div className="">
        <Image
          src={imgSrc ?? "/assets/icons/two-boxes.svg"}
          width={50}
          height={50}
          alt="icon"
          className="md:w-[64px] w-[48px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-[8px]">
        <p className="text-black md:text-[32px] text-[24px] font-[500]">
          {title ?? "Shaping planing"}
        </p>
        <p className="text-[#252525] text-base text-center font-[400] md:max-w-[300px] max-w-[100%]">
          {description ??
            "I start from UX design process from user research and build a wireframe and prototype and start in UI design."}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
