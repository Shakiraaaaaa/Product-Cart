import { useEffect, useState } from "react";
import Phone from './components/Phone/phone';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(phones);

  // add to cart
  const handleAddToCart = (phone) => {
    const newCart = [...cart, phone];
    setCart(newCart);
  };
  // getting random item
  const random = () => {


  }

  // function for clearing cart
  const clear = () => {

  }
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div>

      <h1 className="heading"> The body shop</h1>
      <div>

        <div className='card-container'>
          {phones.map((phone) => (
            <Phone phone={phone} key={phone.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>

        <div className="cart-container">
          <h1 className="cart-heading"> Cart </h1>
          {cart.map((item) => (
            <h3 key={item.id}>{item.name}</h3>
          ))}
          <div className='btn'>
            <button id='btn-choose' onClick={random}>Choose One </button>
            <button id='btn-clear' onClick={clear}>Clear Cart </button>
          </div>
        </div>
      </div>

    </div>



  );
}

export default App;
