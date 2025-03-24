import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"
import { useLocation } from "wouter";
import { useCart } from "./CartStore";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [, setLocation] = useLocation();
    const {addToCart} = useCart();

    const handleAddToCart = (product) => {
       addToCart({
        "id": Math.floor(Math.random() * 10000) + 1,
        "product_id": product.id,
        "productName": product.name,
        "price": product.price,
        "imageUrl": product.image,
        "description": product.description,
        "quantity": 1
       });
       setLocation("/cart");

    }

    useEffect(() => {
        // create a function to load in the products.json
        const fetchProducts = async () => {
            try {

                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/`);
                setProducts(response.data);

            } catch (error) {
                console.error("Error fetching products", error);
            }
        }

        fetchProducts();


    }, [])

    return (
        <div className="container mt-5">
            <h1>Our Products</h1>
            <div className="row">
                {
                    products.map(p => (
                        <div key={p.id} className="col-md-4 mb-4">
                            <ProductCard
                                imageUrl={p.image}
                                productName={p.name}
                                price={p.price}
                                onAddToCart={()=>{
                                    handleAddToCart(p);
                                }}
                            />


                        </div>
                    ))
                }
            </div>
        </div>
    )
}