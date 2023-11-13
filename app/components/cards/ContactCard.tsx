import React from "react";

interface IProps {
  icon: React.ReactNode | null;
  title: string;
  info: string;
}

const ContactCard = ({ icon, info, title }: IProps) => {
  return (
    <div className="flex gap-x-[22px] text-primary">
      <div className="icon">{icon}</div>
      <div className="info flex flex-col gap-y-[8px]">
        <p className="text-2xl text-semibold">{title}</p>
        <p className="text-lg font-[400]">{info}</p>
      </div>
    </div>
  );
};

export default ContactCard;
