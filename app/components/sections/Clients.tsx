"use client";
import React from "react";
import ClientCard from "../cards/ClientCard";
// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Clients = () => {
  return (
    <section
      id="clients"
      className="w-full min-h-screen flex flex-col justify-center h-auto"
    >
      <div className="wrapper w-full flex flex-col gap-y-[28px]">
        <div className="text-center md:text-start flex flex-col gap-y-[16px]">
          <p className="section-title capitalize">clients 🔥</p>
          <p className="section-head capitalize">Feedback From My Clients</p>
        </div>
        <div className="slider w-full px-0">
          <Splide
            tag="section"
            options={{
              rewind: true,
              gap: "25px",
              type: "loop",
              perPage: 2,
              perMove: 1,
              breakpoints: {
                1440: {
                  perPage: 2,
                },
                1080: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
            hasTrack={false}
            aria-label=""
          >
            <SplideTrack className="w-full">
              <SplideSlide>
                <ClientCard
                  name="Traik Arbab"
                  position="Web Developer"
                  text={
                    "Alwaleed was very professional freelancer as a client of his he answered on time delivered on time and his work were amazing and he really cared about user experience and wanted to make sure that the work is perfect.And we were thankful for the opportunity to work with him and we hope in the future we will have similar projects"
                  }
                />
              </SplideSlide>
              <SplideSlide>
                <ClientCard
                  text={"Passionate designer with great skills"}
                  name="Mohammed Elmojtaba Faraj"
                  position="Software Engineer"
                  img="/assets/images/profile/client-1.png"
                />
              </SplideSlide>
              <SplideSlide>
                <ClientCard
                  text={
                    "Alwaleed is talented UIUX designer with excellent aesthetic and good experience creating wireframe design for website and mobile, he is easy to work with and doesn’t hesitate to Promote his ideas to improve customer"
                  }
                  name="Wely Qamer"
                  position="Web Developer"
                />
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows hidden">
              <button className="splide__arrow splide__arrow--prev splide__arrow_custom ml-[-32px]">
                <svg
                  width={68}
                  height={68}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.586 6.344 12 4.93 19.071 12l-7.07 7.072-1.415-1.414L16.243 12l-5.657-5.657Z" />
                </svg>
              </button>
              <button className="splide__arrow splide__arrow--next splide__arrow_custom mr-[-32px]">
                <svg
                  width={4}
                  height={8}
                  className="text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.586 6.344 12 4.93 19.071 12l-7.07 7.072-1.415-1.414L16.243 12l-5.657-5.657Z" />
                </svg>
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Clients;
