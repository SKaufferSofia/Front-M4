import Footer from "@/components/footer/Footer";
import ProductDetailCard from "@/components/products/ProductDetailCard";
import axios from "axios";
import "dotenv/config";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_LOCAL;

const ProductDetailFetch = async (id: number) => {
  const response = await axios.get(`${API_PUBLIC}/products/${id}`);
  const data = response.data;
  return data;
};

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
