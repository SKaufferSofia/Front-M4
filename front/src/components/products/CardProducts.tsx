"use client";

import { IProduct } from "@/interfaces/types";
import { ProductsList } from "./utils";

const CardProducts = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="rounded-xl flex justify-center">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-10">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product: IProduct) => (
            <ProductsList
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
export default CardProducts;
