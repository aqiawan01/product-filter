import React, { useEffect, useState } from 'react';
import './ProductList.css';
import Search from "../search/Search.js";
import Categories from "../categories/Categories.js";
import Product from './Product.js';
import {products as productData} from "../../products-data.js";

const allCategories = [
  "all",
  ...new Set(productData.map((product) => product.category))

];
const ProductList = () => {
  const [products , SetProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filterdProducts, setFilterdProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filterProducts = (category) => {
    if(category == "all"){
      SetProducts(productData)
      return;
    }

    const newProducts = productData.filter((product) => 
    product.category === category)
    SetProducts(newProducts); 
  }

  useEffect(() => {
    setFilterdProducts(
      products.filter((product) => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    )
    console.log(search);
  }, [search, products])

  return (
    <>
    <div className="header">
      <header className="container">
        <h1 className="--color-white --text-center">
          <span className="--color-danger">Product</span> Filter
          </h1>
        <div className="--flex-between --flex-dir-column --py">
          <Search inputValue={search} OnInputChange={handleSearch} />
          <Categories categories={categories} filterItems={filterProducts}/>
        </div>
      </header>
    </div>

    <div className="product-container">
      <div className="products container --grid-25 --py2">
        {filterdProducts.length === 0 ? (
          <h3 className="--text-center --py">No Product Found!!</h3>
        ) : (
          filterdProducts.map((product) => {
            const {id, title, img, price} = product;
            return (
              <div key={id}>
                <Product title={title} img={img} price={price} />
              </div>
            );
          })
        )}      
      </div>
    </div>
    </>
  )
}

export default ProductList