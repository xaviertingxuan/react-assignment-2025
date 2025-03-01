import React, {useState} from 'react'

const ProductCard = (props) => {

    const [cart, setCart] = useState(0)

    const handleAddToCart = () => {
        setCart(c => c + 1)
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
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
