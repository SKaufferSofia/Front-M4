import CardProducts from "@/components/products/CardProducts";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/server/petition";

const Store = async () => {
  const products = await getProducts();

  return (
    <div className="flex justify-center flex-col">
      <Image
        src="/fondo-store.avif"
        alt="fondo store"
        className="img-background"
        width={2000}
        height={1000}
      />
      <CardProducts products={products} />
      <div className="flex justify-center m-10">
        <Link
          href="/home"
          className="flex justify-center rounded-2xl p-2 hover:scale-105 hover:shadow-pink-700 hover:font-semixl hover:bg-black/40"
        >
          <FaHome size={28} className="hover:text-pink-400" />
        </Link>
      </div>
    </div>
  );
};

export default Store;
