import Link from "next/link";
import React from "react";

const UpperNav = () => {
  return (
    <div className="px-[160px] py-[50px] w-full flex justify-between items-center">
      <div className="text-4xl text-primary font-[600] leading-[23.64px]">
        Alwaleed.
      </div>
      <ul className="flex items-center gap-x-[50px]">
        <li className="upper-nav-links hover:text-black/70">
          <Link href={"#"}>about</Link>
        </li>
        <li className="upper-nav-links hover:text-black/70">
          <Link href={"#"}>services</Link>
        </li>
        <li className="upper-nav-links hover:text-black/70">
          <Link href={"#"}>portfolio</Link>
        </li>
        <li className="upper-nav-links hover:text-black/70">
          <Link href={"#"}>clients</Link>
        </li>
        <li className="upper-nav-links hover:text-black/70">
          <Link href={"#"}>contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default UpperNav;
