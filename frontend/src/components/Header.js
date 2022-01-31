import React from 'react';
import CategoryList from './CategoryList';
import '../App.css';

const Header = () => {
  return (
  <div>
    <header className='header'>
    <CategoryList/>
    <div>
        <h1 className='title'>On Tether</h1>
    </div>    
    <div className='log-in'>log In</div>
    </header>
  </div>
  );
};

export default Header;




//<div className='drop-down'>dropdown</div>