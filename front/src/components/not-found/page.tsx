"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="mx-auto h-full grid place-items-center text-center mt-10">
      <Typography
        variant="h1"
        className="mt-10 !text-3xl !leading-snug md:!text-4xl poppins-bold"
      >
        <span className="text-pink-500 ">Error 404</span> <br />{" "}
        <span className="text-white poppins-semibold">It looks like</span>
        something went wrong.
      </Typography>
      <Typography className="mt-8 mb-14 text-[20px] font-normal text-gray-500 mx-auto md:max-w-sm">
        Don&apos;t worry, our team is already on it. <br /> Please try
        refreshing the page or come back later.
      </Typography>
      <div className="flex gap-2">
        <Link
          href="/home"
          className="flex justify-center rounded-2xl p-2 hover:scale-105 hover:shadow-pink-700 hover:font-semixl hover:bg-black/40"
        >
          <button className="button">Home Page</button>
        </Link>
        <Link
          href="/store"
          className="flex justify-center rounded-2xl p-2 hover:scale-105 hover:shadow-pink-700 hover:font-semixl hover:bg-black/40"
        >
          <button className="button">Store Page</button>
        </Link>
        <Link
          href="/contact"
          className="flex justify-center rounded-2xl p-2 hover:scale-105 hover:shadow-pink-700 hover:font-semixl hover:bg-black/40"
        >
          <button className="button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
