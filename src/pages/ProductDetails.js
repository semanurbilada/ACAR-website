import { useParams } from "react-router-dom";
import { ProductsData } from "../services/data";

export default function ProductDetail() {
  const { products } = ProductsData;
  const { categoryId, productId } = useParams();
  const product = products[categoryId].find((p) => p.id === parseInt(productId));

  return (
    <div className="section-default flex-col gap-20">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}