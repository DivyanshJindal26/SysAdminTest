"use client";

import React, { useContext } from "react";
import Button from "@/components/button/button";
import GoogleLogo from "@/public/google.png";
import Image from "next/image";
import Link from "next/link";
import { signInWithGooglePopup } from "@/firebase/firebase";
import { createUserDoc } from "@/lib/actions";
import { UserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { setUserCookie } from "@/lib/server-actions";

const LoginPrompt = () => {
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
    <div className="px-12 py-24 flex flex-col md:items-start items-center">
      <div className="text-center md:text-left text-4xl md:text-6xl font-semibold tracking-tight md:leading-normal bg-gradient-to-br from-pink-500 to-amber-500 inline-block text-transparent bg-clip-text">
        Login to register for events
      </div>
      <div className="text-center md:text-left text-xl md:text-2xl text-zinc-500 font-medium mb-12 max-w-screen-sm">
        Registration on the website is mandatory to attend any event under the
        Technical Induction Program.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {!currentUserID ? (
          <Button variant="black" onClick={loginUser}>
            <Image src={GoogleLogo} alt={"Google logo"} width={24} />
            login with google
          </Button>
        ) : (
          <Button variant="black">
            <Link href={"/profile"}>Go to Profile</Link>
          </Button>
        )}
        <Link href={"/events"}>
          <Button variant="outline">browse events</Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPrompt;
