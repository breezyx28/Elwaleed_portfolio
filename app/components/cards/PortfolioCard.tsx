import Image from "next/image";
import React from "react";

interface IPortfolioProps {
  dir: "rtl" | "ltr";
  appName: string;
  description: string;
  button: React.ReactNode;
  poster: string;
}

const PortfolioCard = (props: IPortfolioProps) => {
  return <div className="w-full min-h-screen">{switcher(props)}</div>;
};

let switcher = ({
  dir,
  appName,
  description,
  button,
  poster,
}: IPortfolioProps) => {
  switch (dir) {
    case "rtl":
      return (
        <div className="wrapper w-full flex md:flex-row flex-col md:items-center md:justify-between gap-[10px]">
          <div className="md:order-1 order-2 md:w-[50vw] w-full h-full flex items-center p-[20px]">
            <div className="wrapper w-full flex flex-col gap-y-[22px]">
              <p className="text-primary text-sm capitalize">{appName}</p>
              <p className="text-black text-[18px] font-bold">{description}</p>
              {button}
            </div>
          </div>
          <div className="md:order-2 order-1 md:w-[50vw] w-full h-full">
            <Image
              src={poster}
              width={1000}
              height={1000}
              className="w-full max-h-[90vh] object-cover"
              alt={appName}
            />
          </div>
        </div>
      );

    case "ltr":
      return (
        <div className="wrapper w-full flex md:flex-row flex-col items-center justify-between gap-[10px]">
          <div className="md:w-[50vw] w-full h-full">
            <Image
              src={poster}
              width={1000}
              height={1000}
              className="md:w-[50vw] w-full max-h-[90vh] object-cover"
              alt={appName}
            />
          </div>
          <div className="md:w-[50vw] w-full h-full flex items-center p-[20px]">
            <div className="wrapper w-full flex flex-col gap-y-[22px]">
              <p className="text-primary text-sm capitalize">{appName}</p>
              <p className="text-black text-[18px] font-bold">{description}</p>
              {button}
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="wrapper w-full flex items-center justify-between gap-[10px]">
          <div className="w-[50%] h-full flex items-center p-[20px]">
            <div className="wrapper w-full flex flex-col gap-y-[22px]">
              <p className="text-primary text-sm capitalize">{appName}</p>
              <p className="text-black text-[18px] font-bold">{description}</p>
              {button}
            </div>
          </div>
          <div className="w-[50vw] h-full">
            <Image
              src={poster}
              width={1000}
              height={1000}
              className="w-full max-h-[90vh] object-cover"
              alt={appName}
            />
          </div>
        </div>
      );
  }
};

export default PortfolioCard;
