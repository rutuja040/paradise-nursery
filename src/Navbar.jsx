import { useSelector } from 'react-redux';

function Navbar({ onNavigate }) {
  const count = useSelector((s) => s.cart.items.reduce((sum, i) => sum + i.quantity, 0));
  return (
    <div className="navbar">
      <div>
        <a onClick={() => onNavigate('home')}>Home</a>
        <a onClick={() => onNavigate('plants')}>Plants</a>
        <a onClick={() => onNavigate('cart')}>Cart</a>
      </div>
      <div>🛒 {count}</div>
    </div>
  );
}
export default Navbar;