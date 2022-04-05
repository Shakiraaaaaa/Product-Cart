import React from "react";

const product = (props) => {
  const { name, image, price, id } = props.product;

  return (
    <div>
      <div className='card'>
        <img src={image} alt='' />
      </div>
      <div className='phone-info'>
        <h1>{name}</h1>
        <h1>$ {price}</h1>
      </div>
      <div className='add-to-cart'>
        <button className="button-cart" onClick={() => props.handleAddToCart(props.product)}> <h1>Add to Cart</h1>

        </button>

      </div>
    </div>
  );
};

export default product;