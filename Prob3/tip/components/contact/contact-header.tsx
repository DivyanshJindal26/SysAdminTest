import React from "react";

const ContactsHeader = () => {
  return (
    <div className="w-screen h-[60vh] bg-[url(https://res.cloudinary.com/div0ryscl/image/upload/v1721296607/mandi-2_e2mwza_emcwke_yfg9qy.png)] bg-center bg-cover flex flex-col px-12 py-12 justify-end items-center md:items-start text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
        Contact Us
      </div>
      <div className="text-xl md:text-2xl mb-5">
        Get in touch for any queries
      </div>
    </div>
  );
};

export default ContactsHeader;
