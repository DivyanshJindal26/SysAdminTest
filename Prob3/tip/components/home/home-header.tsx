import React from "react";
import Button from "@/components/button/button";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <div className="w-screen h-[80vh] bg-[url('https://res.cloudinary.com/div0ryscl/image/upload/v1721296700/pic-3_ginyy7_w93yhh_hfsck0.png')] bg-center bg-cover flex flex-col px-12 py-12 justify-center items-center md:items-start text-zinc-100">
      <div className="text-4xl md:text-6xl font-semibold tracking-tight text-center md:text-left">
        Technical Induction Program &apos;24
      </div>
      <div className="text-xl md:text-2xl font-medium mb-5">
        SnTC, IIT Mandi
      </div>
      <Link href={"/events"}>
        <Button variant="transparent">Browse events</Button>
      </Link>
    </div>
  );
};

export default HomeHeader;
