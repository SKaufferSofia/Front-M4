import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "@/interfaces/types";

export const CardFeatured: React.FC<IProduct> = ({ id, name, image }) => {
  return (
    <div className="flex flex-row justify-center">
      <div className={`${styles.featured}`}>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-black font-semibold m-6">
            {name.toUpperCase()}
          </h1>
          <Link href={`/store/${id}`} className="button flex justify-center">
            SHOP NOW
          </Link>
        </div>
        <Image
          src={image}
          alt={name}
          className="w-40 sm:w-56 xl:w-60"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export const CardProductFeatured: React.FC<IProduct> = ({
  id,
  name,
  price,
  image,
}) => {
  return (
    <Card className="mt-6 flex flex-col justify-between bg-gray-700/30">
      <CardHeader color="blue-gray" className="relative h-56 mt-3">
        <Image
          src={image}
          alt="card-image"
          className="h-full w-full object-contain object-center lg:h-full lg:w-full bg-white p-4"
          width={500}
          height={500}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="white" className="mb-2 poppins-medium">
          {name}
        </Typography>
        <Typography variant="h4" color="pink" className="mb-2 poppins-bold">
          ${price}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={`/store/${id}`}>
          <button className="button">Read More</button>
        </Link>
      </CardFooter>
    </Card>
  );
};
