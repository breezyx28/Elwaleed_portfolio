import React from "react";

type TFloatingCardProps = {
  text: string;
  type: "yellow" | "blue";
  position?: string;
};

const HeroFloatingCardsSM = ({ text, type, position }: TFloatingCardProps) => {
  return (
    <div className={`absolute ${position}`}>
      <div className="relative w-[62.5px] h-[62.5px]">
        {switchType({ text, type })}
      </div>
    </div>
  );
};

const switchType = ({ text, type }: TFloatingCardProps) => {
  switch (type) {
    case "yellow":
      return (
        <>
          <div className="absolute w-full h-full rounded-[12px] border-[3px] border-[#FFA723]"></div>
          <div className="absolute w-full h-full top-[14.58px] right-[-12.5px] rounded-[12px] bg-[#FFF4D1] flex items-center justify-center text-center p-[10px] text-[10px] text-black font-[500] leading-[13.02px]">
            <p>{text}</p>
          </div>
        </>
      );
    case "blue":
      return (
        <>
          <div className="absolute w-full h-full rounded-[12px] border-[3px] border-[#463EFF]"></div>
          <div className="absolute w-full h-full top-[14.58px] right-[-12.5px] rounded-[12px] bg-[#DEDDFF] flex items-center justify-center text-center p-[10px] text-[10px] text-black font-[500] leading-[13.02px]">
            <p>{text}</p>
          </div>
        </>
      );
  }
};

export default HeroFloatingCardsSM;
