import Link from "next/link";
import "./landing.css";
import Image from "next/image";

const LandingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <video autoPlay muted loop className="video-background">
        <source src="/landing-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-container mx-auto max-w-2xl py-10 sm:py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
          Elevate Your Tech Experience
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Discover a world of cutting-edge electronics and accessories. From the
          latest iPhones to high-performance laptops and Apple AirPods, find
          everything you need to enhance your digital lifestyle. Explore our
          collection and stay ahead in the tech game.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/home">
            <button className="button">Get started</button>
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            Learn more
          </Link>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="landingCard" style={{ height: "200px" }}>
            <Image src="icon/screens.svg" alt="" width={100} height={100} />
            <p>Screens </p>
          </div>
          <div className="landingCard" style={{ height: "200px" }}>
            <Image src="icon/buffer-icon.svg" alt="" width={100} height={100} />
            <p>Sound Systems </p>
          </div>
          <div className="landingCard" style={{ height: "200px" }}>
            <Image src="icon/accesories.svg" alt="" width={100} height={100} />
            <p>Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingComponent;
