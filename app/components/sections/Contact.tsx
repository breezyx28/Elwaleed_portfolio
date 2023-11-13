import React from "react";
import { Message2 } from "iconsax-react";
import ContactCard from "../cards/ContactCard";

const Contacts = () => {
  return (
    <section id="contacts" className="w-full min-h-[50vh] h-auto">
      <div className="wrapper flex justify-between">
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
            className="mx-auto w-[500px] px-[40px] bg-white py-[10px] rounded-lg shadow-xl flex flex-col gap-y-[22px]"
          >
            <label htmlFor="name">
              <p className="text-black font-semibold">Name</p>
              <input
                id="name"
                type="text"
                className="bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="Enter your name"
              />
            </label>
            <label htmlFor="email">
              <p className="text-black font-semibold">E-mail</p>
              <input
                id="email"
                type="email"
                className="bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="eg.alwaleedtaha367@gmail.com"
              />
            </label>
            <label htmlFor="message">
              <p className="text-black font-semibold">Message</p>
              <textarea
                id="message"
                rows={5}
                className="bg-gray-100 text-gray-400 p-[10px] w-full rounded-lg mt-[10px]"
                placeholder="Enter your message here"
              />
            </label>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
