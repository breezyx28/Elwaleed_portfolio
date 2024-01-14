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
        <div className="projects flex flex-col md:gap-y-[0px] gap-y-[16px] divide-y divide-[#838383] md:divide-none">
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/mood.png"
            description="Mood App for find your best cafe nearby you"
            text="Mood app is a case study that i working on it from ux design process to create awesome app to help people with ordering their best coffee from nearby cafes."
            button={
              <PrimaryBtn
                text="View Case Study"
                shadowColor="bg-[#7347FF]"
                link="https://www.behance.net/gallery/162716659/Mood-Coffee-"
              />
            }
          />
          <PortfolioCard
            appName="Auctions sale App"
            dir="ltr"
            poster="/assets/images/projects/naximum.png"
            description="Naximum App for auction sale "
            text="Naximum app is auction sales this app in the main time is only for car, but in the future it will for everything's, this app allow you to bid what you want."
            button={
              <PrimaryBtn text="Coming soon" shadowColor="bg-[#7347FF]" />
            }
          />
          <PortfolioCard
            appName="Case Study"
            dir="rtl"
            poster="/assets/images/projects/brando.png"
            description="Brando App for finding jobs matches"
            text="Brando app is a case study that i working on it from ux design process to create awesome app to help people to search jobs online matches with their  job title and also interested"
            button={
              <PrimaryBtn
                text="View Case Study"
                shadowColor="bg-[#7347FF]"
                link="https://www.behance.net/gallery/166487941/Brando-for-finding-jobs"
              />
            }
          />
          <PortfolioCard
            appName="Gascom app"
            dir="ltr"
            poster="/assets/images/projects/gascom.png"
            description="Gascom app for agencies gas "
            text="Gascom app is for find gas nearby you, this app allow to find agencies gas nearby you, you can select what type of your gas."
            button={
              <PrimaryBtn text="Coming soon" shadowColor="bg-[#7347FF]" />
            }
          />
          <PortfolioCard
            appName="See more 💫"
            dir="rtl"
            poster="/assets/images/projects/clean.png"
            description="See My work on behance"
            text=""
            button={
              <PrimaryBtn
                text="See more"
                shadowColor="bg-[#7347FF]"
                link="https://www.behance.net/alwaleedtaha"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
