"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import useUserData from "@/hook/useUserData";
import Image from "next/image";
import ProfileMenu from "./ProfileMenu";

const NavbarComponent: React.FC = () => {
  const { isLoggedIn } = useUserData();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOnChange = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between align-center p-2 lg:px-8 poppins-semibold text-white">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="" width={90} height={90} />
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={styles.navbarLi}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`lg:flex ${
          menuOpen ? "block" : "hidden"
        } absolute lg:relative top-full left-0 w-full lg:w-auto bg-black text-center lg:bg-transparent`}
      >
        <ul className="my-2 flex flex-col lg:flex-row gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
          <Link href="/home">
            <li className={styles.navbarLi} onClick={handleOnChange}>
              HOME
            </li>
          </Link>
          <Link href="/store">
            <li className={styles.navbarLi} onClick={handleOnChange}>
              STORE
            </li>
          </Link>
          <Link href="/about">
            <li className={styles.navbarLi} onClick={handleOnChange}>
              ABOUT
            </li>
          </Link>
          <Link href="/contact">
            <li className={styles.navbarLi} onClick={handleOnChange}>
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4">
        {!isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <Link href="/login">
              <button className={styles.navbarLi}>
                <FaUser size={20} />
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/cart" onClick={handleOnChange}>
              <button className={styles.navbarLi}>
                <FaShoppingBag size={20} />
              </button>
            </Link>
            <ProfileMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
