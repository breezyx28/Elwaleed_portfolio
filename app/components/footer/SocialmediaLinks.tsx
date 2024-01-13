import Link from "next/link";
import React from "react";

interface IProps {
  link: string;
  icon: React.ReactNode;
}

const SocialmediaLinks = ({ link, icon }: IProps) => {
  return (
    <div className="md:w-[70px] md:h-[70px] w-[52px] h-[52px] border-2 border-primary rounded-full flex justify-center items-center">
      <Link href={link}>{icon}</Link>
    </div>
  );
};

export default SocialmediaLinks;
