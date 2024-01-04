import { Star, Star1 } from "iconsax-react";
import React from "react";

type TClientCard = {
  text: string;
  position: string;
  name: string;
};

const ClientCard = ({ text, position, name }: TClientCard) => {
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
          {text}
        </p>
      </div>
      <div className="flex items-center gap-x-[16px]">
        <div className="photo rounded-full w-[80px] h-[80px] bg-[#5f58f7] flex justify-center items-center">
          <p className="text-white text-2xl font-bold">
            {PersonNameInitials(name)}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-black/80 text-lg font-[500]">
            {name ?? "Unknown"}
          </p>
          <p className="text-black/50 text-lg font-[500]">
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
