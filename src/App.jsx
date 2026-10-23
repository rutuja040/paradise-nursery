import { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'plants' | 'cart'

  if (page === 'plants') return <ProductList onNavigate={setPage} />;
  if (page === 'cart') return <CartItem onNavigate={setPage} />;

  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>Where green meets serenity</p>
        <button className="btn" onClick={() => setPage('plants')}>Get Started</button>
      </div>
      <AboutUs />
    </div>
  );
}
export default App;