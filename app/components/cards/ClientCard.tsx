import { Star, Star1 } from "iconsax-react";
import React from "react";
import Starts from "../icons/Start";

type TClientCard = {
  text: string;
  position: string;
  name: string;
  img?: string;
};

const ClientCard = ({ text, position, name, img }: TClientCard) => {
  return (
    <div className="bg-[#F7FAFF] rounded-[20px] w-full md:h-[566px] h-[408px] flex flex-col justify-between md:px-[50px] px-[16px] md:py-[50px] py-[20px]">
      <div className="flex flex-col md:gap-y-[28px] gap-y-[12.85px]">
        <div className="rating flex items-center gap-x-[10px]">
          <Starts />
        </div>
        <p className="md:max-w-[80%] max-w-[100%] text-black md:text-[18px] text-base md:font-[500] font-[400] leading-[23.64px]">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-x-[12px]">
        <div className="photo rounded-full md:w-[100px] w-[48px] md:h-[100px] h-[48px] bg-[#5f58f7] flex justify-center items-center">
          <p className="text-white md:text-[32px] text-[18px] font-[700]">
            {img ? (
              <img
                src={img}
                className="rounded-full md:w-[100px] w-[48px] md:h-[100px] h-[48px]"
              />
            ) : (
              PersonNameInitials(name)
            )}
          </p>
        </div>
        <div className="flex flex-col justify-center md:gap-y-[12px] gap-y-[4px]">
          <p className="text-black/80 md:text-[24px] text-[18px] font-[500]">
            {name ?? "Unknown"}
          </p>
          <p className="text-[#486A9B] md:text-[20px] text-[14px] font-[500]">
            {position ?? "Web Developer"}
          </p>
        </div>
      </div>
    </div>
  );
};

const PersonNameInitials = (name: string) => {
  const initials = name
    .split(" ") // Split the name into an array of words
    .slice(0, 2) // Take only the first two words
    .map((word) => word[0]) // Take the first letter of each word
    .join(""); // Join the letters together

  return <div>{initials}</div>;
};

export default ClientCard;
