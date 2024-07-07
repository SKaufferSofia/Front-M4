"use client";
import React from "react";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";
import useCart from "@/hook/useCart";
import useUserData from "@/hook/useUserData";
import Image from "next/image";
import axios from "axios";
import { IProduct } from "@/interfaces/types";
import CheckoutCard from "./util";
import { useRouter } from "next/navigation";
import Link from "next/link";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

const CheckoutComponent = () => {
  const { cart, clearCart, removeById } = useCart();
  const { token, userData, saveUserData } = useUserData();

  const router = useRouter();

  const CheckoutOrders = async () => {
    try {
      const products = cart.map((product: IProduct) => product.id);
      const response = await axios.post(
        `${API_PUBLIC}/orders`,
        { products },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      alert("Checkout Failed: " + error);
      return false;
    }
  };

  const handleCheckout = async () => {
    const ordersCheckout = await CheckoutOrders();
    if (ordersCheckout) {
      const updateUserData = {
        ...userData,
        orders: [...userData.orders, ordersCheckout],
      };
      saveUserData(updateUserData);
      alert("Checkout Success");
      router.push("/profile/orders");
      clearCart();
    } else {
      alert("Checkout Failed: You don't have enough products in your cart");
    }
  };

  return (
    <div className="py-8 px-8 m-7 bg-black/70 w-[85%] rounded-2xl">
      <Image
        src="/background-check.avif"
        alt="background"
        className="img-background"
        width={2000}
        height={1000}
      />
      <h1 className="text-2xl text-pink-500 font-bold text-center">
        SHOPPING CART
      </h1>
      <div className="mx-auto container grid grid-cols-1 m-14 md:grid-cols-2">
        <div className="flex flex-col">
          {cart.length === 0 ? (
            <p>There is not products in your cart</p>
          ) : (
            <table className="w-full h-[70%]  min-w-max table-auto text-left">
              <tbody>
                {cart.map((product: IProduct) => (
                  <CheckoutCard
                    key={product.id}
                    product={product}
                    removeById={removeById}
                  />
                ))}
              </tbody>
            </table>
          )}
          <div className="flex justify-center m-5">
            <Link href="/store">
              <button className="font-semibold hover:text-pink-500 hover:font-semibold hover:scale-105 hover:shadow-pink-500">
                Add to cart
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-black/60 ml-3 px-6 p-4 rounded-2xl">
          <h1 className="text-2xl text-pink-500 font-bold py-2">
            Order Summary
          </h1>
          <div className="my-8">
            <h1 className="flex justify-between">
              Total
              <span>
                $
                {cart.reduce(
                  (a, b) => a + (b.price !== undefined ? b.price : 0),
                  0
                )}
              </span>
            </h1>
            <hr className="my-2" />
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <button className="button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
