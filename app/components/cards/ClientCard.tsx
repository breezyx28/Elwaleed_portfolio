import { Star, Star1 } from "iconsax-react";
import React from "react";

const ClientCard = () => {
  return (
    <div className="bg-[#f4f5f7] rounded-[18px] w-full min-h-[480px] h-full flex flex-col justify-between px-[38px] py-[28px]">
      <div className="mt-[20px] flex flex-col gap-y-[28px]">
        <div className="rating flex items-center gap-x-[10px]">
          <Star1 size={32} color={"#ffcf40"} />
          <Star1 size={32} color={"#ffcf40"} />
          <Star1 size={32} color={"#ffcf40"} />
          <Star1 size={32} color={"#ffcf40"} />
          <Star1 size={32} color={"#ffcf40"} />
        </div>
        <p className="max-w-[80%] text-black/80 text-sm font-[600] leading-[23.64px]">
          Alwaleed was very professional freelancer as a client of his he
          answered on time delivered on time and his work were amazing and he
          really cared about user experience and wanted to make sure that the
          work is perfect.And we were thankful for the opportunity to work with
          him and we hope in the future we will have similar projects.
        </p>
      </div>
      <div className="flex items-center gap-x-[16px]">
        <div className="photo rounded-full w-[80px] h-[80px] bg-[#5f58f7] flex justify-center items-center">
          <p className="text-white text-2xl font-bold">TA</p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-black/80 text-lg font-[500]">Traik Arbab</p>
          <p className="text-black/50 text-lg font-[500]">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
