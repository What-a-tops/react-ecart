import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmout = cartItems[id]
    return (
        <div className='product' key={id}>
            <img src={productImage} />
            <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <button className='addToCartBttn' onClick={() => addToCart(id)}>
                    Add to Cart {cartItemAmout > 0 && <> ({cartItemAmout}) </>}
                </button>
            </div>
        </div>
    )
}
