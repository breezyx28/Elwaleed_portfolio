import Link from "next/link";
import React from "react";

interface IButtonProps {
  text?: string;
  link?: string;
  shadowColor?: string;
  width?: string;
}

const PrimaryBtn = ({
  text = "button",
  shadowColor,
  width,
  link,
}: IButtonProps) => {
  return (
    <Link
      href={link ?? "#"}
      className={`relative min-w-[200px] h-[50px] group md:mt-[20px] mt-[0px] cursor-pointer`}
    >
      <div
        className={`absolute w-full ${shadowColor} flex justify-center rounded-[100px] ${width} h-full`}
      ></div>
      <div
        className={`absolute bg-white top-[-5px] left-[-5px] border-2 border-black rounded-[100px] w-full ${width} h-full flex justify-center items-center group-hover:top-[0px] group-hover:left-[0px] duration-300 ease-in`}
      >
        <span className="text-black text-sm font-semibold">{text}</span>
      </div>
    </Link>
  );
};

export default PrimaryBtn;
