import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({id, image, title, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            
        </div>
    )
}

export default CheckoutProduct
