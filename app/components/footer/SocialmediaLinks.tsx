import Link from "next/link";
import React from "react";

interface IProps {
  link: string;
  icon: React.ReactNode;
}

const SocialmediaLinks = ({ link, icon }: IProps) => {
  return (
    <div className="w-[60px] h-[60px] border-2 border-primary rounded-full flex justify-center items-center">
      <Link href={link}>{icon}</Link>
    </div>
  );
};

export default SocialmediaLinks;
