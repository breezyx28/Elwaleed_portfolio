import Image from "next/image";
import React from "react";

const ProcessCard = () => {
  return (
    <div className="max-w-[400px] h-auto flex flex-col justify-center items-center gap-[28px] py-[80px]">
      <div className="">
        <Image
          src={"/assets/icons/two-boxes.svg"}
          width={50}
          height={50}
          alt="icon"
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-[8px]">
        <p className="text-black text-xl font-[600]">Shaping planing</p>
        <p className="text-black/80 text-[14px] text-center max-w-[300px]">
          I start from UX design process from user research and build a
          wireframe and prototype and start in UI design.
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
