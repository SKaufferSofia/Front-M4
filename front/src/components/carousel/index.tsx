"use client";

import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export function CarouselDefault() {
  return (
    <Carousel
      placeholder="image"
      style={{ height: "710px" }}
      autoplay={true}
      loop={true}
    >
      <div className="relative h-full w-full">
        <Image
          src="/carousel-1.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
          <div className="w-3/4 text-center md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Mobile and Computer Set
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover the perfect synergy of mobility and productivity with our
              Mobile and Computer Set. Get the latest smartphone paired with a
              high-performance laptop to keep you connected and efficient
              wherever you go. Whether for work or play, this set ensures you
              have the best tools at your fingertips.
            </p>

            <div className="flex justify-center gap-2 mt-10">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/carousel-2.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sound Set, Headphones and Speakers
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Elevate your audio experience with our Sound Set. Enjoy
              crystal-clear sound quality with premium headphones and powerful
              speakers. Perfect for music lovers, gamers, and anyone who values
              superior sound, this set brings your favorite audio to life.
            </p>
            <div className="flex justify-center mt-10">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/carousel-3.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Digital Accessories Set
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Complete your tech collection with our Digital Accessories Set.
              From sleek phone cases to fast-charging cables and versatile
              adapters, this set includes all the essentials to enhance and
              protect your electronic devices. Stay organized and always ready
              with these must-have accessories.
            </p>
            <div className="flex justify-center mt-10">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
