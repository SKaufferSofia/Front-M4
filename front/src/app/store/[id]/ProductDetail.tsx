import ProductDetailCard from "@/components/products/ProductDetailCard";
import { getProductDetail } from "@/lib/server/petitionProducts";

export const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const { id, name, description, price, stock, image } = await getProductDetail(
    Number(params.id)
  );

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
    </div>
  );
};

export default ProductDetail;
