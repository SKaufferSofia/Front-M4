"use client";
import useUserData from "@/hook/useUserData";
import Image from "next/image";
import Link from "next/link";
import AlertSignUp from "../alertSignUp/alertSignUp";

const ProfileComponent = () => {
  const { userData, isLoggedIn } = useUserData();

  return (
    <div className="flex items-center justify-center flex-col mt-7">
      {!isLoggedIn ? (
        <div className="flex items-center justify-center flex-col">
          <AlertSignUp />
        </div>
      ) : (
        <div className="w-[80%] bg-black/90 shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/background-profile.avif"
            alt="background"
            className="img-background-profile"
            width={2000}
            height={1000}
          />
          <div
            className="bg-cover bg-center h-52"
            style={{ backgroundImage: "url('/banner-profile.jpg')" }}
          />
          <div className="relative -mt-12 flex justify-center">
            <img
              className="w-28 h-28 rounded-full border-4 border-pink-500"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="Profile image"
            />
          </div>
          <div className="p-6 text-center">
            <h2 className="text-xl font-bold">{userData.name}</h2>
            <p className="text-gray-400">{userData.email}</p>
            <div className="mt-4 flex flex-col flex-wrap gap-3 lg:flex-row lg:justify-center lg:gap-8">
              <div className="text-center">
                <p className="text-pink-500 font-semibold">Adress</p>
                <p className="text-gray-400 text-sm font-semibold">
                  {userData.address}
                </p>
              </div>
              <div className="text-center">
                <p className="text-pink-500 font-semibold">Phone</p>
                <p className="text-gray-400 text-sm font-semibold">
                  {userData.phone}
                </p>
              </div>
              <div className="text-center">
                <p className="text-pink-500 font-semibold">Orders</p>
                <p className="text-gray-400 text-sm font-semibold">
                  {" "}
                  {userData.orders.length}
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/profile/orders">
                <button className="button-black">View Orders</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
