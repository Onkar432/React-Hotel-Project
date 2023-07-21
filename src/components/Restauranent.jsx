// Restauranent.jsx
import React, { useState } from 'react';
import "./Restaurant.css";
import menu from './MenuApi';
import Menucard from './Menucard';
import Navbar from './navbar';

const Restauranent = () => {
  const [menuData, setmenuData] = useState(menu);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    if (category === 'All') {
      setmenuData(menu); // Show all menu items
    } else {
      // Filter menu items based on the selected category
      const filteredMenu = menu.filter((item) => item.mealCategory === category);
      setmenuData(filteredMenu);
    }
  };

  return (
    <>
      <Navbar onCategorySelect={handleCategorySelect} />
      <h1 id='HotelName'>Developer's Hotel </h1>
      <Menucard menuData={menuData} />
    </>
  );
};

export default Restauranent;
