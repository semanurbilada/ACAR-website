import React, { useState } from "react";
import ProductDetails from "./ProductDetails"
import { ProductsData } from "../services/data"
import { Link, useParams } from "react-router-dom";

export default function Products() {
  const { categoryId, productId } = useParams();
  const { categories, products } = ProductsData;
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id);

  return (
    <div className="section-default gap-20">
      <div className="absolute left-0 top-40 px-20 border-r border-primary-700">
        <h2 className="mb-10">Ürün Kategorilerimiz</h2>
        <ul className="flex flex-col gap-8">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`/products/${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer bg-primary-transparent p-2 ${
                  selectedCategory === category.id ? "font-bold" : ""
                }`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        {productId ? (
          <ProductDetails categoryId={categoryId} productId={productId} />
        ) : (
          <div className="grid grid-cols-2 gap-10">
            {products[selectedCategory].map((product) => (
              <div key={product.id}>
                <Link to={`/products/${selectedCategory}/${product.id}`}>
                  {product.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>       
    </div>
  );
}