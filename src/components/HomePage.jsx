import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios'


const HomePage = () => {

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('featured.json');
        setFeaturedProducts(response.data);
        setError(null); // Clear any errors
      } catch (error) {
        console.error('Error fetching featured products: ', error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


    // const fetchFeaturedProducts = async () => {
    //   const response = await axios.get('featured.json');

    //   setFeaturedProducts(response.data);
    //   console.log(response.data);
    // }

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="row">
        {featuredProducts.map(p => (
        <div key={p.id} className="col-md-3 mb-4">
          <ProductCard
            imageUrl={p.image}
            productName={p.Name}
            price= {p.price.toFixed(2)}
          />
        </div>
        ))}
       
      </div>
    </div>
  )
}

export default HomePage
