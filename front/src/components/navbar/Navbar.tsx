"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaShoppingBag, FaUser, FaUserPlus } from "react-icons/fa";
import useToken from "@/hook/useToken";
import useUserData from "@/hook/useUserData";
import useCart from "@/hook/useCart";
import Image from "next/image";

const NavbarComponent: React.FC = () => {
  const { token, setToken } = useToken();
  const { logout } = useUserData();
  const { clearCart } = useCart();

  const handleLogout = () => {
    logout();
    setToken(null);
    clearCart();
    window.location.href = "/";
  };

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between align-center p-2 lg:px-8 poppins-semibold text-white">
      <div>
        <Link href="/">
          <Image src="/logo.png" alt="" width={90} height={90} />
        </Link>
      </div>
      <div>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Link href="/home">
            <li className={styles.navbarLi}>HOME</li>
          </Link>
          <Link href="/store">
            <li className={styles.navbarLi}>STORE</li>
          </Link>
          <Link href="/about">
            <li className={styles.navbarLi}>ABOUT</li>
          </Link>
          <Link href="/contact">
            <li className={styles.navbarLi}>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4">
        {token ? (
          <div className="flex gap-4">
            <Link href="/profile/dashboard">
              <button className={styles.navbarLi}>
                <FaUser size={20} />
              </button>
            </Link>
            <Link href="/cart">
              <button className={styles.navbarLi}>
                <FaShoppingBag size={20} />
              </button>
            </Link>
            <button className="button" onClick={handleLogout} type="button">
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link href="/cart">
              <button className={styles.navbarLi}>
                <FaShoppingBag size={20} />
              </button>
            </Link>
            <Link href="/login">
              <button className={styles.navbarLi}>
                <FaUser size={20} />
              </button>
            </Link>

            <Link href="/login/register">
              <button className={styles.navbarLi}>
                <FaUserPlus size={24} />
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
