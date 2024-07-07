"use client";

import { IProduct } from "@/interfaces/types";
import { CardProductFeatured } from "../featured/utils";

export const ProductFeatured = ({ products }: { products: IProduct[] }) => {
  let productsFeatured = [products[0], products[3], products[4], products[5]];
  return (
    <div className=" m-10 flex justify-between flex-col">
      <h1 className="text-2xl text-pink-500 font-bold m-6 text-center">
        Product Featured
      </h1>
      <div className="mx-auto max-w-2xl sm:px-6 sm:py-0 lg:max-w-7xl lg:px-4 ">
        <div className="flex flex-col gap-3 xl:flex-row">
          {productsFeatured.map((product: IProduct) => (
            <CardProductFeatured
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
