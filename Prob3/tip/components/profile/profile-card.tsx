"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
import UserPic from "@/public/user.png";
import { getUserDoc } from "@/lib/actions";
import { DocumentData } from "@firebase/firestore";
import toast from "react-hot-toast";
import { destroyCookie } from "@/lib/server-actions";

const ProfileCard = () => {
  const { currentUserID, setCurrentUserID } = useContext(UserContext);
  const router = useRouter();
  const [userData, setUserData] = useState<DocumentData>({});

  useEffect(() => {
    if (!currentUserID) {
      router.push("/");
    } else {
      (async () => {
        try {
          const data = await getUserDoc(currentUserID);
          setUserData(data);
        } catch (e) {
          console.error("Error fetching user data:", e);
          setCurrentUserID(null);
          router.push("/");
        }
      })();
    }
  }, [currentUserID]);

  const signOut = async () => {
    setCurrentUserID(null);
    await destroyCookie();
    toast.success("Signed out successfully!");
    router.push("/");
  };

  return (
    <div className="grid grid-cols-12 mb-12">
      <div className="p-5 sm:p-12 col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 border-2 border-zinc-200 bg-zinc-200/[0.2] rounded-md mt-12">
        <div className="flex flex-col sm:flex-row items-center gap-5 pb-12">
          <Image
            src={userData?.photoURL || UserPic}
            width={200}
            height={200}
            className="w-40 h-40 shadow-xl shadow-zinc-900/[0.3] rounded-full"
            alt="Profile"
          />
          <div>
            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
              {userData?.displayName || "Username"}
            </div>
            <div
              className="text-lg font-medium text-sky-500 underline cursor-pointer hover:text-sky-600"
              onClick={signOut}
            >
              Sign out
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2.5 items-center mb-12">
          <div className="text-lg font-semibold">Email</div>
          <Link href="">
            <div className="text-base text-sky-500 underline">
              {userData?.email || "testmail@gmail.com"}
            </div>
          </Link>
        </div>
        <div className="text-xl md:text-2xl font-medium mb-2.5">
          Registered events
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {userData?.registeredEvents?.map((event: string) => (
            <div className="text-lg" key={event}>
              {event}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
