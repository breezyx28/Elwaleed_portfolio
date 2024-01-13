import Image from "next/image";
import React from "react";

interface ICardProps {
  icon: string;
  title: string;
  description: string;
}

const WhatIDoCard = ({ description, icon, title }: ICardProps) => {
  return (
    <div className="flex flex-col gap-y-[16px] items-center">
      <div className="icon">
        <Image
          src={icon ?? "/assets/icons/do-1.svg"}
          width={46}
          height={46}
          alt={title ?? "UI Design"}
        />
      </div>
      <div className="title text-3xl text-black font-[500]">
        {title ?? "UI Design"}
      </div>
      <div className="description text-black text-sm text-center max-w-[300px]">
        {description ?? "desc"}
      </div>
    </div>
  );
};

export default WhatIDoCard;
