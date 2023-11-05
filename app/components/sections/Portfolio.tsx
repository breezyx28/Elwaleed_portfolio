import React from "react";
import PortfolioCard from "../cards/PortfolioCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full min-h-screen h-auto">
      <div className="wrapper flex flex-col gap-y-[28px]">
        <div className="title flex flex-col gap-y-[16px]">
          <p className="text-primary text-[18px] font-semibold capitalize">
            portfolio
          </p>
          <p className="text-black text-5xl font-semibold capitalize">
            my work
          </p>
        </div>
        <div className="projects flex flex-col gap-y-[28px]">
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/mood.jpg"
            description="Mood App for find your best cafe nearby you"
            button={<PrimaryBtn text="View Case Study" shadowColor="#ff8a25" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
