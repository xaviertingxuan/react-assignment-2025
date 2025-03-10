import React, { useState } from 'react'

const ProductCard = (props) => {

    const [cart, setCart] = useState(0)

    // const handleAddToCart = () => {
    //     setCart(c => c + 1)
    // }

    //prevent cart from going below 0
    const handleRemovefromCart = () => {
        setCart(c => Math.max(0, c - 1))
    }

    return (
        <div>
            <div className="card">
                <img
                    src={props.imageUrl}
                    className="card-img-top"
                    alt={props.productName}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.productName}</h5>
                    <p className="card-text">${props.price}</p>
                    <p className="card-text">Items in cart: {cart}</p>
                    <div className="d-flex justify-content-between d-grid gap-3">
                        <button className="btn btn-primary" onClick={()=>{
                  console.log("added to cart");
                  props.onAddToCart();
                }}>
                            Add to Cart
                        </button>
                        <button className="btn btn-danger" onClick={handleRemovefromCart}>
                            Remove from Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
