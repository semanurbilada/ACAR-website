import { useState, useContext } from "react";
import { StateContext } from "../App";
import { Link } from "react-router-dom";
import { ProductsData } from "../services/data";
import Icons from "../components/icons/Icons";

export default function Products() {
  const { language } = useContext(StateContext);
  const productsData = ProductsData[language];

  const [ isSidebar, setIsSidebar ] = useState(false);

  const { categories, products } = productsData;
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id);

  return (
    <div className="section-default items-start sm:mt-20 mt-10 mb-10">
      <div className="container flex items-start sm:justify-between sm:gap-10 gap-8">
        <Icons 
          iconName="sidebar"
          className={`${
            isSidebar 
              ? "rotate-90 fill-gray-400 shadow-xl animation" 
              : "rotate-180 fill-primary-700 shadow-2xl animation"
            } 
          sm:hidden absolute left-6 top-40 cursor-pointer `}
          onClick={() => setIsSidebar(!isSidebar)}
        />

        {/* Categories */}
        <div className="hidden sm:flex flex-col bg-primary-transparent rounded-xl md:px-8 px-4 py-4 shadow-xl">
          <h2 
            className="mb-3 p-2 text-primary-900 border-b-2 border-primary-900 md:text-lg text-sm font-medium">
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

        {/* Mobil Categories */}
        <div className={`${ 
            isSidebar 
              ? "opacity-100 pointer-events-auto w-48"
              : "opacity-0 pointer-events-none w-0"
            } 
          sm:hidden flex flex-col bg-primary-transparent rounded-xl md:px-8 sm:px-4 px-2 sm:py-4 py-2 shadow-xl animation`}
        >
          <h2 
            className="mb-3 p-2 text-primary-900 sm:border-b-2 border-b border-primary-900 md:text-lg sm:text-sm text-xs sm:font-medium font-normal">
            {productsData.title}
          </h2>

          <ul className="flex flex-col items-start md:gap-6 sm:gap-4 gap-2 text-primary-900 md:text-base sm:text-sm text-xs">
            { categories.map((category) => (
              <Link 
                key={category.id}
                to={`/products/${category.id}`}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full py-2 ${
                  selectedCategory === category.id ? "bg-primary-900 rounded-lg sm:p-2 p-1 sm:font-medium text-white animation" : ""
                }`} 
              >
                {category.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="hidden sm:grid 2xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
          {products[selectedCategory].map((product) => (
            <div 
              className="md:w-52 sm:w-40 w-36 md:hover:scale-105 animation" 
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

        {/* Mobil Products */}
        <div className={`sm:hidden grid gap-8 ${
            isSidebar ? "grid-cols-1" : "grid-cols-2"
          }`}>
          {products[selectedCategory].map((product) => (
            <div 
              className="md:w-52 sm:w-40 w-36 md:hover:scale-105 animation" 
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
      </div>
    </div>
  );
}