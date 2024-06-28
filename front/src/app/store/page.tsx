import CardProducts from "@/components/products/CardProducts";
import axios from "axios";
import Footer from "@/components/footer/Footer";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_LOCAL;

const fetchProducts = async () => {
  const response = await axios.get(`https://front-m4.onrender.com/products`);
  const data = response.data;

  return data;
};

const Store = async () => {
  const products = await fetchProducts();

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
      <Footer />
    </div>
  );
};

export default Store;
