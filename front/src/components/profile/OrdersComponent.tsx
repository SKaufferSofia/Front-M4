"use client";
import axios from "axios";
import { useEffect } from "react";
import useUserData from "@/hook/useUserData";
import useCart from "@/hook/useCart";
import Image from "next/image";
import { IProduct } from "@/interfaces/types";
import formatOrderDateTime from "./utils";
import { NEXT_PUBLIC_API_URL } from "@/lib/server/envs";

const API_PUBLIC = NEXT_PUBLIC_API_URL;

const OrdersComponent = () => {
  const { token } = useUserData();
  const { orders, setOrders } = useCart();

  const getOrders = async () => {
    try {
      const response = await axios.get(`${API_PUBLIC}/users/orders`, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });

      setOrders(response.data);

      return true;
    } catch (error) {
      alert("Error getting orders: " + error);
      return false;
    }
  };

  useEffect(() => {
    if (token) getOrders();
  }, [token]);

  return (
    <div className="w-[100%] m-4 lg:w-[85%]">
      <Image
        src="/background-profile.avif"
        alt="background"
        className="img-background"
        width={2000}
        height={1000}
      />
      {orders.length === 0 ? (
        <div className="mx-auto container m-24">
          <h1 className="text-2xl text-center font-semibold">My Orders</h1>
          <p className="text-center m-2">You do not have any orders</p>
        </div>
      ) : (
        <div className="mx-auto container m-4">
          <h1 className="text-2xl text-center font-semibold">My Orders</h1>
          {orders.map((order) => (
            <div
              key={order.id}
              className="m-4 mt-7 p-5  bg-black/90 rounded-2xl border-t border-pink-500"
            >
              <div className=" flex justify-between ailgn-center m-auto border-b border-pink-500 py-5 lg:justify-around">
                <div className="flex flex-col w-[15%] text-center">
                  <h1>Order number</h1>
                  <p className="text-gray-500">{order.id}</p>
                </div>
                <div className="flex flex-col w-[15%] text-center">
                  <h1>Date placed</h1>
                  <p className="text-gray-500">
                    {formatOrderDateTime(order.date)}
                  </p>
                </div>
                <div className="flex flex-col w-[15%] text-center">
                  <h1>Order Status</h1>
                  <p className="text-green-500">{order.status}</p>
                </div>
                <div className="flex flex-col w-[15%] text-center">
                  <h1>Total amount</h1>
                  <p className="text-white font-medium">
                    $
                    {order.products.reduce(
                      (a, b) => a + (b.price !== undefined ? b.price : 0),
                      0
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                {order.products.map((product: IProduct) => (
                  <div
                    key={product.id}
                    className="border-b py-4 flex m-2 gap-4 lg:gap-[33%] mt-4"
                  >
                    <div className="relative w-28 h-28">
                      <img
                        src={product.image}
                        alt=""
                        className="h-full w-full p-2 rounded-md object-contain object-center lg:h-28 lg:w-28 lg:p-2 lg:rounded-xl bg-white"
                      />
                    </div>
                    <div className="relative w-32 h-28 flex items-center">
                      <p>{product.name}</p>
                    </div>
                    <div className="relative w-32 h-28 flex items-center">
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersComponent;
