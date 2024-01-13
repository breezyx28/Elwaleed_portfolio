import React from "react";

interface IProps {
  icon: React.ReactNode | null;
  title: string;
  info: string;
}

const ContactCard = ({ icon, info, title }: IProps) => {
  return (
    <div className="flex items-center md:gap-x-[22px] gap-x-[8px] text-primary">
      <div className="icon flex items-center justify-center w-[48px] h-[48px] bg-white rounded-full">
        {icon}
      </div>
      <div className="info flex flex-col md:gap-y-[8px] gap-y-[4px]">
        <p className="md:text-[32px] text-[18px] md:font-[500] font-[600]">
          {title}
        </p>
        <p className="md:text-[24px] text-base font-[400]">{info}</p>
      </div>
    </div>
  );
};

export default ContactCard;
