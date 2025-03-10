import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useFlashMessage } from '../FlashMessageStore';
import { useLocation } from 'wouter';
import { useCart } from './CartStore';


const ProductPage = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart} = useCart();
  const [, setLocation] = useLocation();
  const { showMessage} = useFlashMessage();

  const handleAddToCart = (product) => {
      addToCart({
          id: Math.floor(Math.random()* 9999 + 1),
          product_id: product.id,
          productName: product.name,
          imageUrl: product.image,
          price: product.price,
          description: product.description
      });
      showMessage("Product added to cart", "success");
      setLocation("/cart");
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('products.json');
        setProducts(response.data);
        setError(null); // Clear any errors
      } catch (error) {
        console.error('error fetching products: ', error);
      }finally{
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row">
        {products.map(p => (
          <div key = { p.id } className = "col-md-4 mb-4" >
          <ProductCard
            imageUrl={p.image}
            productName={p.name}
            price={p.price.toFixed(2)}
            onAddToCart={() => {handleAddToCart(p)}}
          />
          </div>
        ))}
    </div>
    </div >
  )
}

export default ProductPage
