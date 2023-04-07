import React from 'react';
import "./TShirt.css";

const TShirt = ({tshirt, handleAddToCart}) => {
    const {_id, name, picture, gender, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>{name}</h4>
            <h5>Gender: {gender}</h5>
            <h6>Price: {price}</h6>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;