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

  //TODO: Mobil'de kategoriler sidebar olmalı;

  return (
    <div className="section-default items-start mt-20 mb-10">
      <div className="container flex items-start justify-between gap-10">
        <div className="hidden sm:flex flex-col bg-primary-transparent rounded-xl md:px-8 px-4 py-4 shadow-xl">
          <h2 
            className="mb-3 p-2 text-primary-900 border-b-2 border-primary-900 md:text-lg text-base font-medium">
            {productsData.title}
          </h2>

          <ul className="flex flex-col items-start md:gap-6 gap-4 text-primary-900 md:text-base text-sm">
            { categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full py-2 ${
                  selectedCategory === category.id ? "bg-primary-900 rounded-lg p-2 font-medium text-white animation" : ""
                }`} 
              >
                {category.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="hidden sm:grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          {products[selectedCategory].map((product) => (
            <div 
              className="md:w-52 w-40 md:hover:scale-105 animation" 
              key={product.id}
            >
              <img 
                className="w-full md:h-60 h-52 rounded-lg object-cover" 
                src={product.image} 
                alt="product" 
              />
            </div>
          ))}
        </div>    

        <div className="flex sm:hidden">
          <MobileProducts />
        </div>
      </div>
    </div>
  );
}