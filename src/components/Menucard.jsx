import React from 'react';

const Menucard = ({ menuData }) => {
  return (
    
    <>
    <div className='menu-container'>
      {menuData.map((currElement) => (
        
       
          <div className='Card-container Card' key={currElement.id}>
            <div className='card'>
              <span className='card-no'>{currElement.id}</span>
              <p className='meal-category'>{currElement.mealCategory}</p>
              <p className='dish-name'>{currElement.dishName}</p>
              <img src={currElement.image} alt="dish-img" className='img' />
              <p className='dish-price'>{currElement.dishPrice}</p>
              <p className='dish-description'>{currElement.dishDescription}</p>
            </div>
          </div>
     
      ))}
      </div>
    </>
  );
};

export default Menucard;
