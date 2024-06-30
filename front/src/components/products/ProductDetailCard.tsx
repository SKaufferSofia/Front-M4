"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import useCart from "@/hook/useCart";
import useToken from "@/hook/useToken";
import Image from "next/image";
import { IProduct } from "@/interfaces/types";

const ProductDetailCard = ({
  id,
  name,
  description,
  price,
  stock,
  image,
  categoryId,
}: IProduct) => {
  const { setCart } = useCart();
  const { token } = useToken();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (token) {
      setCart((prevCart) => [...prevCart, { id, name, price, image }]);
      alert("Added to cart successfully");
    } else {
      alert("You must be logged in to add items to your cart");
      window.location.href = "/login";
    }
  };

  return (
    <section className="py-16 px-8 bg-black/70">
      <Image
        src={image}
        alt="background"
        className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white img-background-store"
        width={2000}
        height={1000}
      />
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
        <Image
          src={image}
          alt="pink blazer"
          className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white rounded-3xl"
          width={500}
          height={500}
          style={{ width: "480px", height: "480px" }}
        />
        <div>
          <Typography className="mb-4" variant="h3">
            {name}
          </Typography>
          <Typography variant="h4" className="text-pink-500 font-extrabold">
            ${price}
          </Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-400">
            {description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Typography className="!text-sm font-extrabold !text-gray-400">
              <span className=" text-pink-600 font-extrabold">Stock:</span>{" "}
              {stock}
            </Typography>
          </div>
          <Typography color="white" variant="h6">
            Categoria
          </Typography>
          <div className="my-8 mt-3 flex items-center gap-2 text-gray-400">
            {categoryId}
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <button className="button" onClick={handleAddToCart}>
              Add to cart
            </button>
            <IconButton
              color="white"
              variant="text"
              className="shrink-0 hover:bg-pink-600/70"
            >
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailCard;
