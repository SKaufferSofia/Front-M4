"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black/70 text-white py-5">
      <hr
        className="border border-white m-8"
        style={{ opacity: 0.5, margin: "35px" }}
      />
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center pl-6">
          <h2
            className="text-2xl font-bold mb-4 text-pink-500"
            style={{ paddingRight: "25px" }}
          >
            About Us
          </h2>
          <p className="text-gray-400">
            We are a dedicated team providing the best products and services to
            our customers. Our mission is to bring quality and satisfaction in
            every interaction.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">Quick Links</h2>
          <nav>
            <ul className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-4 justify-center md:justify-start ">
              <li>
                <Link
                  href="/home"
                  className="hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 hover:font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 hover:font-semibold"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 hover:font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 hover:font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Image
            src="/logo.png"
            alt="logo"
            className="h-20 flex justify-center mt-4"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">Follow Us</h2>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 mt-4">Connect with us on social media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
