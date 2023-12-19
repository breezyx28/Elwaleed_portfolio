import React from "react";
import ClientCard from "../cards/ClientCard";
// import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Clients = () => {
  return (
    <section id="clients" className="w-full min-h-screen h-auto">
      <div className="wrapper flex flex-col gap-y-[28px]">
        <div className="title flex flex-col gap-y-[16px]">
          <p className="text-primary text-[18px] font-semibold capitalize">
            clients
          </p>
          <p className="text-black text-5xl font-semibold capitalize">
            Feedback From My Clients
          </p>
        </div>
        <div className="slider h-full w-full grid grid-cols-2 gap-[32px]">
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </section>
  );
};

export default Clients;
