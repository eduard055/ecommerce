import React, { useState } from 'react';
import './Products.css';

const products = [
  { id: 1, name: 'Classic', price: 2900, category: 'Pistols', image: 'https://valorantstrike.com/wp-content/uploads/Valorant-RGX-11z-Pro-2-Collection-Classic-HD.jpg' },
  { id: 2, name: 'Phantom', price: 2900, category: 'Rifles', image: 'https://valorantstrike.com/wp-content/uploads/Valorant-RGX-11z-Pro-2-Collection-Phantom-HD-1536x864.jpg' },
  { id: 3, name: 'Operator', price: 4700, category: 'Snipers', image: 'https://th.bing.com/th/id/OIP.n2EIQRFHWmx9OnMztE9E7QHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 4, name: 'Outlaw', price: 2700, category: 'Snipers', image: 'https://tse3.mm.bing.net/th/id/OIP.FUkajKv5vfRo4_uIT0j09gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id: 5, name: 'Vandal', price: 2700, category: 'Rifles', image: 'https://valorantstrike.com/wp-content/uploads/Valorant-RGX-11Z-Pro-Collection-Vandal-HD.jpg' },
  { id: 6, name: 'Spectre', price: 1600, category: 'Sub Machine Guns', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzueS2_NKCMsUtAHip71k9UDlvAF_wAVYPoA&s' },
  { id: 7, name: 'Stinger', price: 1100, category: 'Sub Machine Guns', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfO1I6eWsH6QwsDPwcdukAsvFeUO2inPz8Q&s' },
  { id: 8, name: 'Bucky', price: 1100, category: 'Shotgun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkOGwKpCtYu_R1xvuaAJbBsyrhkBPSFkdIg&s' },
  { id: 9, name: 'Judge', price: 1100, category: 'Shotgun', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBDYlAHpyZdRoRdr_yLi7597nWy0R-79wtxw&s' },
  { id: 10, name: 'Shorty', price: 1100, category: 'Pistols', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXY1YyBayxsLhZj8S6DHhemE4QxwrSHFeuA&s' },
  { id: 11, name: 'Frenzy', price: 1100, category: 'Pistols', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRvg7Yu6KrY8gTHWp00Ot9E7S9yCztzlg-Q&s' },
  { id: 12, name: 'Ghost', price: 1100, category: 'Pistols', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPU1DgVRnmHXlyjkmdWfWLnqetSQ904b9ZhA&s' },
  { id: 13, name: 'Bandit', price: 1100, category: 'Pistols', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSvsfMEPgbiER4CldfIFE28E-WlLHzUEiow&s' },
  { id: 14, name: 'Sheriff', price: 1100, category: 'Pistols', image: 'https://valorantstrike.com/wp-content/uploads/2020/11/Valorant-Ion-Collection-Sheriff-HD.jpg' },
  { id: 15, name: 'Ares', price: 1100, category: 'Heavy Machine Guns', image: 'https://valorantstrike.com/wp-content/uploads/2020/10/Valorant-Singularity-Collection-Ares-HD.jpg' },
  { id: 16, name: 'Odin', price: 1100, category: 'Heavy Machine Guns', image: 'https://valorantstrike.com/wp-content/uploads/2021/03/Valorant-Prime-2-Collection-Odin-HD.jpg' },
  { id: 17, name: 'Bulldog', price: 1100, category: 'Rifles', image: 'https://valorantstrike.com/wp-content/uploads/Valorant-Protocol-Collection-Bulldog-HD.jpg' },
  { id: 18, name: 'Guardian', price: 1100, category: 'Rifles', image: 'https://valorantstrike.com/wp-content/uploads/2021/09/Valorant-Spectrum-Collection-Guardian-HD.jpg' },
  { id: 19, name: 'Marshal', price: 1100, category: 'Snipers', image: 'https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Sovereign-Marshal-Purple-Variant.jpg' },
  
  
  
];

function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pistols', 'Sub Machine Guns', 'Rifles', 'Snipers', 'Shotgun','Heavy Machine Guns'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="products">
      <h1>Our Products</h1>
      <div className="category-buttons">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₱{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;