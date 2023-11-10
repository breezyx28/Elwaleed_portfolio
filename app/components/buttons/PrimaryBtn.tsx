import React from "react";

interface IButtonProps {
  text?: string;
  shadowColor?: string;
}

const PrimaryBtn = ({ text = "button", shadowColor }: IButtonProps) => {
  return (
    <div className="relative group mt-[20px] cursor-pointer">
      <div
        className={`absolute ${shadowColor} rounded-[100px] w-[200px] h-[50px]`}
      ></div>
      <div
        className={`absolute bg-white top-[-20px] left-[10px] border-2 border-black rounded-[100px] w-[200px] h-[50px] flex justify-center items-center group-hover:top-[0px] group-hover:left-[0px] duration-300 ease-in`}
      >
        <span className="text-black text-sm font-semibold">{text}</span>
      </div>
    </div>
  );
};

export default PrimaryBtn;
