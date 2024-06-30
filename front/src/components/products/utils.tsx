import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/interfaces/types";

export const ProductsList: React.FC<IProduct> = ({
  id,
  name,
  price,
  image,
  description,
}) => {
  return (
    <Card className="mt-6 w-80 bg-black/80 hover:scale-105 hover:shadow-2xl hover:shadow-pink-700 flex justify-between">
      <Typography variant="h5" color="white" className="m-5">
        {name}
      </Typography>
      <CardHeader color="blue-gray" className="relative h-56 mt-1">
        <Image
          src={image}
          alt="card-image"
          className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="pink" className="mb-2">
          ${price}
        </Typography>
        <Typography className="text-white/50">{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <div className="flex items-center justify-between">
          <Link href={`store/${id}`}>
            <button className="button">Read More</button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
