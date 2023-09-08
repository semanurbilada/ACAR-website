import { useState, useContext } from "react";
import { StateContext } from "../App";
import { Link } from "react-router-dom";
import { ProductsData } from "../services/data";
import MobileProducts from "../components/MobileProducts";

export default function Products() {
  const { language } = useContext(StateContext);
  const productsData = ProductsData[language];

  const { categories, products } = productsData;
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id);

  return (
    <div className="section-default items-start mt-20 mb-10">
      <div className="container flex items-start justify-start gap-20">
        <div className="hidden md:flex flex-col bg-primary-transparent rounded-xl px-8 py-4">
          <h2 
            className="mb-6 p-2 text-primary-900 border-b-2 border-primary-900 text-lg font-medium">
            {productsData.title}
          </h2>

          <ul className="flex flex-col items-start gap-4 text-primary-900">
            { categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full py-2 ${
                  selectedCategory === category.id ? "bg-primary-900 rounded-xl py-2 font-medium text-white animation" : ""
                }`} 
              >
                {category.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8">
          {products[selectedCategory].map((product) => (
            <div 
              className="w-52 hover:scale-105 animation" 
              key={product.id}
            >
              <img 
                className="w-full h-60 rounded-lg object-cover" 
                src={product.image} 
                alt="product" 
              />
            </div>
          ))}
        </div>    

        <div className="flex md:hidden">
          <MobileProducts />
        </div>
      </div>
    </div>
  );
}