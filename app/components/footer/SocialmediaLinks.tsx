import Link from "next/link";
import React from "react";

interface IProps {
  link: string;
  icon: React.ReactNode;
}

const SocialmediaLinks = ({ link, icon }: IProps) => {
  return (
    <Link
      href={link}
      className="md:w-[70px] md:h-[70px] w-[52px] h-[52px] border-2 border-primary rounded-full flex justify-center items-center"
    >
      <div>{icon}</div>
    </Link>
  );
};

export default SocialmediaLinks;
