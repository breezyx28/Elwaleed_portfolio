import React from "react";
import PortfolioCard from "../cards/PortfolioCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full h-auto py-[50px] border-b-2">
      <div className="wrapper w-full flex flex-col gap-y-[28px]">
        <div className="w-full flex flex-col items-center md:items-start md:gap-y-[16px] md:gap-y-[12px]">
          <p className="section-title capitalize">portfolio ✨</p>
          <p className="section-head capitalize">my work</p>
        </div>
        <div className="projects flex flex-col md:gap-y-[0px] gap-y-[10px] md:divide-y divide-[#838383] divide-none">
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/mood.png"
            description="Mood App for find your best cafe nearby you"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="Case Study"
            dir="ltr"
            poster="/assets/images/projects/mood.png"
            description="Mood App for find your best cafe nearby you"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/brando.png"
            description="Brando App for finding jobs matches with 
            your interested"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="See more"
            dir="ltr"
            poster="/assets/images/projects/clean.png"
            description="See My work on behance"
            button={<PrimaryBtn text="See more" shadowColor="bg-[#24f3c2]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
