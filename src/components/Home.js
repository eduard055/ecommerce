import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>Welcome to Valorant E-Commerce Store</h1>
        <p>Discover amazing guns at great prices.</p>
        <Link to="/products" className="btn">Shop Now</Link>
      </section>
    </main>
  );
}

