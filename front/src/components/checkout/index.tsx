"use client";
import React from "react";
import useCart from "@/hook/useCart";
import useUserData from "@/hook/useUserData";
import Image from "next/image";
import { IProduct } from "@/interfaces/types";
import CheckoutCard from "./checkoutCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { alertQuestion, alertTime } from "@/utils/utils";
import { CheckoutOrders } from "@/lib/server/petitionProducts";
import AlertSignUp from "../alertSignUp/alertSignUp";

const CheckoutComponent = () => {
  const { cart, clearCart, removeById } = useCart();
  const { token, userData, saveUserData, isLoggedIn } = useUserData();

  const router = useRouter();

  const handleCheckout = async () => {
    const alert = await alertQuestion(
      "question",
      "Checkout Orders",
      "Are you sure you want to checkout?",
      "orange",
      "Yes, checkout!"
    );

    if (alert.isConfirmed) {
      const ordersCheckout = await CheckoutOrders(cart, token);
      const updateOrders = {
        ...userData,
        orders: [...userData.orders, ordersCheckout],
      };
      saveUserData(updateOrders);
      alertTime("success", "Checkout Success", "green");
      router.push("/profile/orders");
      clearCart();
    } else {
      alertTime("error", "Checkout Failed", "red");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {!isLoggedIn ? (
        <div className="flex items-center justify-center flex-col">
          <AlertSignUp />
        </div>
      ) : (
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
                <button
                  className="button"
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutComponent;
