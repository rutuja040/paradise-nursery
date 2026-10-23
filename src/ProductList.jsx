import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

const img = (seed) => `https://picsum.photos/seed/${seed}/200`;
const p = (name, cost) => ({ name, cost, image: img(name.replace(/\s/g, '')) });

const categories = [
  { title: 'Air Purifying Plants', plants: [
    p('Snake Plant', 15), p('Spider Plant', 12), p('Peace Lily', 18),
    p('Boston Fern', 14), p('Rubber Plant', 17), p('Areca Palm', 20) ] },
  { title: 'Aromatic Plants', plants: [
    p('Lavender', 10), p('Jasmine', 13), p('Mint', 6),
    p('Rosemary', 8), p('Lemon Balm', 9), p('Basil', 7) ] },
  { title: 'Succulents', plants: [
    p('Aloe Vera', 11), p('Jade Plant', 14), p('Echeveria', 9),
    p('Haworthia', 10), p('Burros Tail', 16), p('Zebra Cactus', 12) ] },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);
  const inCart = (name) => items.some((i) => i.name === name);

  return (
    <div>
      <Navbar onNavigate={onNavigate} />
      {categories.map((cat) => (
        <div className="category" key={cat.title}>
          <h2>{cat.title}</h2>
          <div className="grid">
            {cat.plants.map((plant) => (
              <div className="card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.cost}</p>
                <button className="btn" disabled={inCart(plant.name)}
                  onClick={() => dispatch(addItem(plant))}>
                  {inCart(plant.name) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductList;