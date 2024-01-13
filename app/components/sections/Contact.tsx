import React from "react";
import { Call, Location, Message2 } from "iconsax-react";
import ContactCard from "../cards/ContactCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Contacts = () => {
  return (
    <section id="contacts" className="w-full min-h-[50vh] h-auto mb-[40px]">
      <div className="wrapper bg-[#F3EFFF] flex md:flex-row flex-col justify-between rounded-[12px]">
        <div className="contact-info flex flex-col gap-y-[40px] md:px-[48px] px-[16px] md:py-[48px] py-[24px]">
          {/* <div className="title flex flex-col gap-y-[16px]">
            <p className="text-primary text-[18px] font-semibold capitalize">
              Get in touch
            </p>
            <p className="text-black md:text-5xl text-4xl font-semibold capitalize">
              Contact Me
            </p>
          </div> */}
          <div className="flex flex-col gap-y-[32px]">
            <ContactCard
              icon={<Message2 size={24} color="#7347FF" />}
              title="E-mail"
              info="alwaleedtaha367@gmail.com"
            />
            <ContactCard
              icon={<Call size={24} color="#7347FF" />}
              title="Phone"
              info="+249 113362126"
            />
            <ContactCard
              icon={<Location size={24} color="#7347FF" />}
              title="Location"
              info="Cairo, Egypt"
            />
          </div>
        </div>
        <div className="contact-form p-[16px] md:p-[48px]">
          <form
            action="/"
            className="bg-[#7347FF] mx-auto md:min-w-[500px] w-full md:px-[80px] px-[16px] md:pt-[24px] md:pb-[32px] pb-[16px] pt-[16px] rounded-[8px] flex flex-col md:gap-y-[24px] gap-y-[12px]"
          >
            <h1 className="text-center text-white md:text-[68px] text-[32px] font-[500]">
              Contact Me
            </h1>
            <label htmlFor="name">
              {/* <p className="text-black font-[500] text-sm">Name</p> */}
              <input
                id="name"
                type="text"
                className="md:min-w-[400px] w-full text-[#858585] text-base px-[16px] h-[48px] rounded-[4px]"
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email">
              {/* <p className="text-black font-[500] text-sm">E-mail</p> */}
              <input
                id="email"
                type="email"
                className="md:min-w-[400px] w-full text-[#858585] text-base px-[16px] h-[48px] rounded-[4px]"
                placeholder="eg.alwaleedtaha367@gmail.com"
              />
            </label>
            <label htmlFor="message">
              {/* <p className="text-black font-[500] text-sm">Message</p> */}
              <textarea
                id="message"
                rows={5}
                className="md:min-w-[400px] w-full text-[#858585] px-[16px] h-[130px] rounded-[4px]"
                // placeholder="Enter your message here"
              />
            </label>
            <div className="w-full flex justify-center items-center">
              <button className="contact-btn" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
