"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import sntcLogo from "@/public/sntc.png";
import Button from "@/components/button/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithGooglePopup } from "@/firebase/firebase";
import { UserContext } from "@/context/user-context";
import { createUserDoc } from "@/lib/actions";
import toast from "react-hot-toast";
import { setUserCookie } from "@/lib/server-actions";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { currentUserID, setCurrentUserID } = useContext(UserContext);
  const router = useRouter();

  const loginUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      if (user.email && /iitmandi.ac.in/.test(user.email)) {
        setCurrentUserID(user.uid);
        await createUserDoc(user);
        await setUserCookie(user.uid);
        toast.success("Signed in successfully!");
        router.push("/profile");
      } else {
        toast.error("Please login with your institute ID.");
        router.push("/");
      }
    } catch (e) {
      toast.error("Error signing in. More info in console");
      router.push("/");
      console.log(e);
    }
  };

  return (
    <>
      <div className="w-full bg-zinc-100 h-full px-5 sm:px-12 py-2.5 flex flex-row justify-between items-center border-b-2">
        <Image
          src={sntcLogo}
          alt="SnTC logo"
          className="w-[40px] sm:w-[60px] aspect-square"
        />
        <div className="hidden sm:flex gap-5 items-center text-base leading-normal font-medium uppercase">
          <Link href={"/"}>Home</Link>
          <Link href={"/events"}>Events</Link>
          <Link href={"/contact"}>contact</Link>
          {currentUserID ? (
            <Link href={"/profile"}>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Button onClick={loginUser}>Login</Button>
          )}
        </div>
        <div
          className="inline sm:hidden pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <X size={36} /> : <Menu size={36} />}
        </div>
      </div>
      <div
        className={`${toggle ? "flex" : "hidden"} bg-zinc-100 w-full p-5 sm:hidden flex-col gap-5 text-base leading-normal font-medium uppercase border-b-2`}
      >
        <Link href={"/"} onClick={() => setToggle(false)}>
          Home
        </Link>
        <Link href={"/events"} onClick={() => setToggle(false)}>
          Events
        </Link>
        <Link href={"/contact"} onClick={() => setToggle(false)}>
          contact
        </Link>
        {currentUserID ? (
          <Link href={"/profile"} onClick={() => setToggle(false)}>
            profile
          </Link>
        ) : (
          <div
            className="cursor-pointer"
            onClick={async () => {
              await loginUser();
              setToggle(false);
            }}
          >
            Login
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
