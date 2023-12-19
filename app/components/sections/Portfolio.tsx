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
        <div className="projects flex flex-col md:gap-y-[8px] gap-y-[100px]">
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/mood.jpg"
            description="Mood App for find your best cafe nearby you"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="Case Study"
            dir="ltr"
            poster="/assets/images/projects/mood.jpg"
            description="Mood App for find your best cafe nearby you"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/brando.jpg"
            description="Brando App for finding jobs matches with 
            your interested"
            button={
              <PrimaryBtn text="View Case Study" shadowColor="bg-[#ff8a25]" />
            }
          />
          <PortfolioCard
            appName="See more"
            dir="ltr"
            poster="/assets/images/projects/clean.jpg"
            description="See My work on behance"
            button={<PrimaryBtn text="See more" shadowColor="bg-[#24f3c2]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
