"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { eventData } from "@/lib/event-data";
import Link from "next/link";

const JumpBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={
          "w-full bg-zinc-100 px-5 md:px-12 py-5 flex items-center justify-between cursor-pointer" +
          (!toggle && " border-b-2 border-zinc-900/[0.1]")
        }
        onClick={() => setToggle(!toggle)}
      >
        <div className="text-2xl font-medium">Jump to</div>
        {toggle ? <Minus size={32} /> : <Plus size={32} />}
      </div>
      {toggle && (
        <div className="w-screen bg-zinc-100 border-b-2 border-zinc-900/[0.1] px-5 md:px-12 pb-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xl">
          {eventData.map((e) => (
            <Link
              href={`#event-${e.id}`}
              onClick={() => {
                setToggle(false);
              }}
              key={e.id}
            >
              {e.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default JumpBar;
