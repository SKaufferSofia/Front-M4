import { CarouselDefault } from "@/components/carousel";
import FeaturedComponent from "@/components/featured/Featured";
import { ProductFeatured } from "@/components/featured/FeaturedProducts";
import { getProducts } from "@/lib/server/petitionProducts";
import Image from "next/image";

const Home = async () => {
  const products = await getProducts();
  return (
    <div>
      <Image
        src="/background-home.avif"
        alt=""
        width={2000}
        height={1000}
        className="img-background"
      />
      <CarouselDefault />

      <FeaturedComponent products={products} />

      <ProductFeatured products={products} />
    </div>
  );
};

export default Home;
