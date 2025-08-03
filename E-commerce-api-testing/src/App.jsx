import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Product from './Components/Product';

function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');


  // Function to fetch all categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products/categories');
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to fetch all Products
  const getProducts = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  // Function to fetch all Products by Categories
  const getProductsByCategory = async () => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
    getProducts();

    if (categoryName !== '') {
      getProductsByCategory();
      console.log(categoryName)
    }
  }, [categoryName])

  return (
    <>
      <h1 className='text-center  mt-4 font-bold text-3xl'>Our Products</h1>
      <div className='grid grid-cols-[30%_auto] gap-4'>

        {/* Left Compo */}
        <div className='mt-4 p-12'>
          <ul className='text-2xl font-semibold'>
            {
              categories.map((category, index) => (
                <li onClick={() => setCategoryName(category.name)} className='bg-gray-200 mb-2' key={index}>{category.name}</li>
              ))
            }
          </ul>
        </div>

        {/* Right Compo */}
        <div>
          <div>
            <div className='grid grid-cols-3 gap-3'>
              {
                products.map((product, index) => (
                  <Product key={index} product={product} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
