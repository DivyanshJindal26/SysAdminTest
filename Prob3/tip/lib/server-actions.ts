"use server";

import { cookies } from "next/headers";

export const getUserCookie = async () => {
  return cookies().get("user_id");
};

export const setUserCookie = async (userID: string) => {
  cookies().set({
    name: "user_id",
    value: userID,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
};

export const destroyCookie = async () => {
  cookies().delete("user_id");
};
