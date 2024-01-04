import React from "react";

type TFloatingCardProps = {
  text: string;
  type: "yellow" | "blue";
  position?: string;
};

const HeroFloatingCards = ({ text, type, position }: TFloatingCardProps) => {
  return (
    <div className={`absolute ${position}`}>
      <div className="relative w-[120px] h-[120px]">
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
          <div className="absolute w-full h-full rounded-[12px] border-4 border-yellow-300"></div>
          <div className="absolute w-full h-full top-[20px] right-[-20px] rounded-[12px] bg-yellow-50 flex items-center justify-center text-center p-[10px] text-black font-[500]">
            <p>{text}</p>
          </div>
        </>
      );
    case "blue":
      return (
        <>
          <div className="absolute w-full h-full rounded-[12px] border-4 border-indigo-500"></div>
          <div className="absolute w-full h-full top-[20px] right-[-20px] rounded-[12px] bg-violet-50 flex items-center justify-center text-center p-[10px] text-black font-[500]">
            <p>{text}</p>
          </div>
        </>
      );
  }
};

export default HeroFloatingCards;
