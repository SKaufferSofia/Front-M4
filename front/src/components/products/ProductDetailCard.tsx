"use client";

import { Typography } from "@material-tailwind/react";
import useCart from "@/hook/useCart";
import useUserData from "@/hook/useUserData";
import Image from "next/image";
import { IProduct } from "@/interfaces/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetailCard = ({
  id,
  name,
  description,
  price,
  image,
  categoryId,
}: IProduct) => {
  const { cart, addToCard } = useCart();
  const { token } = useUserData();
  const router = useRouter();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (token) {
      const itemExists = cart.some((item) => item.id === id);

      if (itemExists) {
        alert("Product already in cart");
        router.push("/cart");
      } else {
        addToCard({ id, name, price, image });
        alert("Added to cart successfully");
        router.push("/cart");
      }
    } else {
      alert("You must be logged in to add items to your cart");
      router.push("/login");
    }
  };

  return (
    <section className="py-10 px-4 bg-black/70 lg:py-16">
      <Image
        src={image}
        alt="background"
        className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white img-background-store"
        width={2000}
        height={1000}
      />
      <div className="mx-auto container grid place-items-center grid-cols-1 gap-8 md:grid-cols-2">
        <Image
          src={image}
          alt="pink blazer"
          className="h-[18rem] w-[21rem] p-3 object-contain object-center lg:h-[26rem] lg:w-[29rem] lg:p-5 bg-white rounded-3xl"
          width={500}
          height={500}
        />
        <div>
          <Typography className="mb-4 poppins-medium" variant="h3">
            {name}
          </Typography>
          <Typography variant="h4" className="text-pink-500 poppins-bold">
            ${price}
          </Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-400 poppins-regular">
            {description}
          </Typography>
          <div className="mt-8">
            <Typography color="white" variant="h6" className="poppins-medium">
              Categoria
            </Typography>
            <div className="my-8 mt-3 flex items-center gap-2 text-gray-400 poppins-regular">
              {categoryId}
            </div>
          </div>
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Link href="/store">
              <button className="button" onClick={handleAddToCart}>
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-10">
        <Link
          href="/store"
          className="rounded-2xl hover:scale-105 hover:shadow-pink-700 hover:font-semixl hover:bg-black/40"
        >
          <FaArrowLeft size={28} className="hover:text-pink-400" />
        </Link>
      </div>
    </section>
  );
};

export default ProductDetailCard;
