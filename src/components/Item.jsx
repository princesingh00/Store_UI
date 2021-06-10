import React from 'react'
import '../assets/scss/Item.scss'

function Item({ id, name, imageUrl, price }) {
    return (
        <div className="item">
            <img src={imageUrl} alt="item_" />
            <h2>{name}</h2>
            <h2>₹ {price}</h2>
        </div>
    )
}

export default Item