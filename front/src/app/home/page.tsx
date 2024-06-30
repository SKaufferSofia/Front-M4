import { CarouselDefault } from "@/components/carousel";
import FeaturedComponent from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import { ProductFeatured } from "@/components/featured/FeaturedProducts";
import { fetchProducts } from "@/lib/server/petition";

const Home = async () => {
  const products = await fetchProducts();
  return (
    <div className="absolute inset-0 z-0">
      <CarouselDefault />
      <div style={{ marginTop: "60px" }}>
        <FeaturedComponent products={products} />
      </div>
      <div style={{ marginTop: "100px" }}>
        <ProductFeatured products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
