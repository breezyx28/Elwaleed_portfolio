import Image from "next/image";
import React from "react";

interface IPortfolioProps {
  dir: "rtl" | "ltr";
  appName: string;
  description: string;
  text: string;
  button: React.ReactNode;
  poster: string;
}

const PortfolioCard = (props: IPortfolioProps) => {
  return <div className="w-full md:py-[0px] py-[16px]">{switcher(props)}</div>;
};

let switcher = ({
  dir,
  appName,
  description,
  text,
  button,
  poster,
}: IPortfolioProps) => {
  switch (dir) {
    case "rtl":
      return (
        <div className="wrapper w-full flex md:flex-row flex-col md:items-center justify-center gap-x-[100px] gap-y-[16px]">
          <div className="md:w-[50vw] w-full h-full flex items-center md:p-[20px] p-[0px]">
            <div className="wrapper w-full flex flex-col md:items-start items-center gap-y-[22px]">
              <p className="text-center md:text-start text-primary text-sm capitalize">
                {appName}
              </p>
              <p className="text-center md:text-start text-black text-[18px] md:font-bold font-[600]">
                {description}
              </p>
              <p className="text-center md:text-start max-w-[430px] text-[#858585] text-base font-[400] leading-[24px]">
                {text}
              </p>
              {button}
            </div>
          </div>
          <div className="md:w-[50vw] w-full h-full">
            <img
              src={poster}
              className="w-full max-h-[750px] md:h-[100%] h-[327px] object-contain"
              alt={appName}
            />
          </div>
        </div>
      );

    case "ltr":
      return (
        <div className="wrapper w-full flex md:flex-row flex-col items-center justify-center gap-x-[100px] gap-y-[16px]">
          <div className="md:order-1 order-2 md:w-[50vw] w-full h-full">
            <img
              src={poster}
              className="md:w-[50vw] w-full max-h-[750px] md:h-[100%] h-[327px] object-contain"
              alt={appName}
            />
          </div>
          <div className="md:order-2 order-1 md:w-[50vw] w-full h-full flex items-center p-[20px]">
            <div className="wrapper w-full flex flex-col md:items-start items-center gap-y-[22px]">
              <p className="text-center md:text-start text-primary text-sm capitalize">
                {appName}
              </p>
              <p className="text-center md:text-start text-black text-[18px] font-bold">
                {description}
              </p>
              <p className="text-center md:text-start max-w-[430px] text-[#858585] text-base font-[400] leading-[24px]">
                {text}
              </p>
              {button}
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="wrapper w-full flex md:flex-row flex-col md:items-center justify-center gap-x-[100px] gap-y-[16px]">
          <div className="md:w-[50vw] w-full h-full flex items-center md:p-[20px] p-[0px]">
            <div className="wrapper w-full flex flex-col md:items-start items-center gap-y-[22px]">
              <p className="text-center md:text-start text-primary text-sm capitalize">
                {appName}
              </p>
              <p className="text-center md:text-start text-black text-[18px] md:font-bold font-[600]">
                {description}
              </p>
              <p className="text-center md:text-start max-w-[430px] text-[#858585] text-base font-[400] leading-[24px]">
                {text}
              </p>
              {button}
            </div>
          </div>
          <div className="md:w-[50vw] w-full h-full">
            <img
              src={poster}
              className="w-full max-h-[750px] md:h-[100%] h-[327px] object-contain"
              alt={appName}
            />
          </div>
        </div>
      );
  }
};

export default PortfolioCard;
