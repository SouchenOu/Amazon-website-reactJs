import React from 'react'
import './header.css'
import img1 from './img/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function header() {
  return (
   
      <div className='header'>
        <Link to="/">
            <img className='header-logo' 
            src={img1} alt= ""/>
        </Link>
            <div className='header_search'>
                <input className='header_searchInput' type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className='header_nav'>
                <div className='header-option'>
                    <span className='span1'>Hello souchen</span>
                    <span className='span2'>Sign in</span>
                </div>
                <div className='header-option'>
                    <span className='span1'>Returns</span>
                    <span className='span2'>& orders</span>
                </div>
                <div className='header-option'>
                    <span className='span1'>Your</span>
                    <span className='span2'>prime</span>
                </div>
            
            <Link to="/checkout">
                <div className='header_optionShopping'>
                    <ShoppingCartIcon className='ShoppingCart'/>
                    <span className=' header_optionLineTwo header_shoppingcartCount'>0</span>
                </div>
            </Link>
      </div>
      </div>

  );
}

export default header
