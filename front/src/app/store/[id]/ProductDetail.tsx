import Footer from "@/components/footer/Footer";
import ProductDetailCard from "@/components/products/ProductDetailCard";
import { ProductDetailFetch } from "@/lib/server/petition";

export const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id, name, description, price, stock, image } =
    await ProductDetailFetch(Number(params.id));

  return (
    <div>
      <ProductDetailCard
        id={id}
        name={name}
        description={description}
        price={price}
        stock={stock}
        image={image}
        categoryId={id}
      />
      <Footer />
    </div>
  );
};

export default ProductDetail;
