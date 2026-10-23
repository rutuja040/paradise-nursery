import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const total = items.reduce((sum, i) => sum + i.cost * i.quantity, 0);

  const decrease = (item) => {
    if (item.quantity > 1) dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    else dispatch(removeItem(item.name));
  };

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      <div className="cart-page">
        <h2>Shopping Cart</h2>
        {items.length === 0 && <p>Your cart is empty.</p>}
        {items.map((item) => (
          <div className="cart-row" key={item.name}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>Unit price: ${item.cost}</p>
            </div>
            <div className="qty">
              <button onClick={() => decrease(item)}>-</button>
              {item.quantity}
              <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
            </div>
            <p>Total: ${item.cost * item.quantity}</p>
            <button className="btn" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
          </div>
        ))}
        <h3>Total Cart Amount: ${total}</h3>
        <button className="btn" onClick={() => onNavigate('plants')}>Continue Shopping</button>{' '}
        <button className="btn" onClick={() => alert('Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
}
export default CartItem;