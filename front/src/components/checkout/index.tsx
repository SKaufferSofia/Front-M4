"use client";
import React, { useEffect, useState } from "react";
import useCart from "@/hook/useCart";
import useToken from "@/hook/useToken";
import Image from "next/image";
import axios from "axios";
import { IProduct } from "@/interfaces/types";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_LOCAL;

const CheckoutComponent = () => {
  const { cart, clearCart, clientCart } = useCart();
  const { token } = useToken();

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
      console.log(error);
      return false;
    }
  };

  const handleCheckout = async () => {
    const ordersCheckout = await CheckoutOrders();
    if (ordersCheckout) {
      console.log("Checkout Success");
      clearCart();
    } else {
      console.log("Checkout Failed");
    }
  };

  return (
    <div>
      {clientCart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        clientCart.map((product: IProduct) => (
          <div key={product.id}>
            <h1>Checkout</h1>
            <p>{product.name}</p>
            <Image
              src={product.image}
              alt={product.name}
              style={{ width: "80px" }}
              width={80}
              height={80}
            />
            <p>{product.price}</p>
          </div>
        ))
      )}
      <button className="button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default CheckoutComponent;
