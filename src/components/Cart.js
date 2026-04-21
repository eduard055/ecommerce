import React from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>₱{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total:₱{total}</h2>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;