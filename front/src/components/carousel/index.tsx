"use client";

import { Carousel, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

export function CarouselDefault() {
  return (
    <Carousel
      placeholder="image"
      className="rounded-xl"
      style={{ height: "700px" }}
      autoplay={true}
      loop={true}
    >
      <div className="relative h-full w-full">
        <Image
          src="/guitar-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Mobile and Computer Set
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Discover the perfect synergy of mobility and productivity with our
              Mobile and Computer Set. Get the latest smartphone paired with a
              high-performance laptop to keep you connected and efficient
              wherever you go. Whether for work or play, this set ensures you
              have the best tools at your fingertips.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/drum-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Sound Set, Headphones and Speakers
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Elevate your audio experience with our Sound Set. Enjoy
              crystal-clear sound quality with premium headphones and powerful
              speakers. Perfect for music lovers, gamers, and anyone who values
              superior sound, this set brings your favorite audio to life.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/store">
                <button className="button">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/piano-carousel.avif"
          alt="image 1"
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
          style={{ filter: "grayscale(80%)" }}
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Digital Accessories Set
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Complete your tech collection with our Digital Accessories Set.
              From sleek phone cases to fast-charging cables and versatile
              adapters, this set includes all the essentials to enhance and
              protect your electronic devices. Stay organized and always ready
              with these must-have accessories.
            </Typography>
            <div className="flex justify-center gap-2">
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
