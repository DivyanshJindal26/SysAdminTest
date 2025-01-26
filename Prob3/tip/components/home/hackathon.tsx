"use client";

import React from "react";
import Button from "@/components/button/button";
import Link from "next/link";

const Hackathon = () => {
  return (
    <div className="w-full px-12 p-24 text-zinc-900 bg-zinc-100 flex flex-col gap-5 items-center justify-center">
      <div className="text-3xl sm:text-6xl font-bold uppercase bg-gradient-to-br from-pink-500 to-amber-500 inline-block text-transparent bg-clip-text text-center">
        New: TIP Hackathon
      </div>
      <div className="max-w-screen-sm">
        We&apos;re organising a fortnight-long hackathon starting right now,
        till 15 Sep! You can choose a mentor, and submit your ideas in the form
        given below. For more details about the mentors, check out the links.
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSfx-f0WrOHhV3NOl2waADcCEy5tIITdaDxxX7aD5yJdazSp4g/viewform?usp=sf_link"
          }
          target={"_blank"}
        >
          <Button variant="black">register</Button>
        </Link>
        <Link
          href={
            "https://docs.google.com/document/d/1YOstm2I4DS5RVQ5CblPO70wGXO6Y5_ICLv-TjfHc9wc/edit?usp=sharing"
          }
          target={"_blank"}
        >
          <Button variant="outline">view mentors</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hackathon;
