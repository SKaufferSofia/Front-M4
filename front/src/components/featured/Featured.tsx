"use client";

import { IProduct } from "@/interfaces/types";
import { CardFeatured } from "./utils";

const FeaturedComponent = ({ products }: { products: IProduct[] }) => {
  let productsFeatured = [products[1], products[2]];
  return (
    <div className=" m-10 flex justify-between flex-col relative z-0">
      <div className="flex flex-col justify-center xl:flex-row">
        {productsFeatured.map((product: IProduct) => (
          <CardFeatured
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedComponent;
