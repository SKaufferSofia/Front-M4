import { CheckoutCardProps } from "@/interfaces/types";
import { FaTrash } from "react-icons/fa";

const CheckoutCard = ({ product, removeById }: CheckoutCardProps) => {
  const { id, name, image, price } = product;

  const handleRemoveItem = () => {
    if (id !== undefined) {
      removeById(id);
      alert("Item removed from cart");
    }
  };

  return (
    <tr className="text-center">
      <td className="p-1 border-b border-blue-gray-50 w-14">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 p-2 rounded-md object-contain object-center lg:h-14 lg:w-14 lg:p-2 bg-white"
        />
      </td>
      <td className="w-0 p-2 border-b border-blue-gray-50 lg:w-auto">
        <p>{name}</p>
      </td>
      <td className="p-2 border-b border-blue-gray-50">
        <p>${price}</p>
      </td>
      <td className="border-b border-blue-gray-50">
        <button
          className="w-10 h-10 bg-black/50 rounded-lg flex justify-center items-center "
          onClick={handleRemoveItem}
        >
          <FaTrash className="text-pink-500" />
        </button>
      </td>
    </tr>
  );
};

export default CheckoutCard;
