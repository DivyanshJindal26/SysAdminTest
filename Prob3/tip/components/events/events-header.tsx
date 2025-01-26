import React from "react";

const EventsHeader = () => {
  return (
    <div className="w-screen h-[60vh] bg-[url(https://res.cloudinary.com/div0ryscl/image/upload/v1721296696/pic-2_nufeqd_y6xkyp_dpmemu.jpg)] bg-center bg-cover flex flex-col px-12 py-12 justify-end items-center md:items-start text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
        View Events
      </div>
      <div className="text-xl md:text-2xl mb-5">
        See what&apos;s in it for you
      </div>
    </div>
  );
};

export default EventsHeader;
