import React from "react";

const product = (props) => {
  const { name, image, price, id } = props.phone;

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
        <button className="button-cart" onClick={() => props.handleAddToCart(props.phone)}>Add to Cart

        </button>

      </div>
      <div>
        <h1>How does react works</h1>
        <span>Facebook is in charge of keeping it up to date. React employs a declarative approach that makes it easy to reason about your application while also aiming for efficiency and flexibility. It creates basic views for each state in your project, and when your data changes, React updates and renders the appropriate component quickly.</span>
      </div>
    </div>
  );
};

export default product;