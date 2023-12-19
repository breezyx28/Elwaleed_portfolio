import React from "react";
import { Message2 } from "iconsax-react";
import ContactCard from "../cards/ContactCard";
import PrimaryBtn from "../buttons/PrimaryBtn";

const Contacts = () => {
  return (
    <section id="contacts" className="w-full min-h-[50vh] h-auto mb-[40px]">
      <div className="wrapper flex md:flex-row flex-col justify-between">
        <div className="contact-info flex flex-col gap-y-[40px]">
          <div className="title flex flex-col gap-y-[16px]">
            <p className="text-primary text-[18px] font-semibold capitalize">
              Get in touch
            </p>
            <p className="text-black text-5xl font-semibold capitalize">
              Contact Me
            </p>
          </div>
          <div className="flex flex-col gap-y-[32px]">
            <ContactCard
              icon={<Message2 size={32} color="#000" />}
              title="E-mail"
              info="alwaleedtaha367@gmail.com"
            />
            <ContactCard
              icon={<Message2 size={32} color="#000" />}
              title="Phone"
              info="+249 113362126"
            />
            <ContactCard
              icon={<Message2 size={32} color="#000" />}
              title="Location"
              info="Based on Khartuom sudan"
            />
          </div>
        </div>
        <div className="contact-form">
          <form
            action="/"
            className="mx-auto md:min-w-[500px] w-full md:px-[100px] px-[50px] bg-white py-[40px] rounded-lg shadow-xl flex flex-col gap-y-[22px]"
          >
            <label htmlFor="name">
              <p className="text-black font-[500] text-sm">Name</p>
              <input
                id="name"
                type="text"
                className="md:min-w-[400px] w-full bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email">
              <p className="text-black font-[500] text-sm">E-mail</p>
              <input
                id="email"
                type="email"
                className="md:min-w-[400px] w-full bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="eg.alwaleedtaha367@gmail.com"
              />
            </label>
            <label htmlFor="message">
              <p className="text-black font-[500] text-sm">Message</p>
              <textarea
                id="message"
                rows={5}
                className="md:min-w-[400px] w-full bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="Enter your message here"
              />
            </label>
            <div className="pb-[40px] w-full">
              <PrimaryBtn
                shadowColor="bg-[#24f3c2]"
                text="Send Message"
                width="w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
