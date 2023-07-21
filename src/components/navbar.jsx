// Navbar.jsx
import React from "react";
import "./Navbar.css";

const Navbar = ({ onCategorySelect }) => {
  return (
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group-item" onClick={() => onCategorySelect('Breakfast')}>Breakfast</button>
        <button className="btn-group-item" onClick={() => onCategorySelect('Lunch')}>Lunch</button>
        <button className="btn-group-item" onClick={() => onCategorySelect('Dinner')}>Dinner</button>
        <button className="btn-group-item" onClick={() => onCategorySelect('Snacks')}>Snacks</button>
        <button className="btn-group-item" onClick={() => onCategorySelect('Dessert')}>Dessert</button>
        <button className="btn-group-item" onClick={() => onCategorySelect('All')}>All</button>
      </div>
    </nav>
  );
};

export default Navbar;
