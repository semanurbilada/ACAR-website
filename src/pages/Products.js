import { useState, useContext } from "react";
import { StateContext } from "../App";
import { Link } from "react-router-dom";
import { ProductsData } from "../services/data"

export default function Products() {
  const { language } = useContext(StateContext);
  const productsData = ProductsData[language];

  const { categories, products } = ProductsData;
  const [ selectedCategory, setSelectedCategory ] = useState(categories[0].id);

  //TODO: flex yerine grid kullanılacak bütün ürünler sayfası position için!
  return (
    <div className="section-default items-start mt-20">
      <div className="container flex items-start gap-10">
        <div className="hidden md:flex flex-col bg-primary-transparent rounded-xl px-8 py-4">
          <h2 className="mb-6 p-2 text-primary-900 border-b-2 border-primary-900 text-lg font-medium">Ürün Kategorilerimiz</h2>
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

        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {products[selectedCategory].map((product) => (
            <div className="w-52 rounded-lg bg-primary-transparent pt-0 pb-4 hover:scale-105 animation" key={product.id}>
              <img 
                className="w-full h-48 rounded-t-lg object-cover" 
                src={product.image} 
                alt="product" 
              />
              <p>
                {product.name}
              </p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>    
      </div>
    </div>
  );
}