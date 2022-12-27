import React from 'react'
import './header.js'
import img1 from './img/logo.png';
import SearchIcon from '@mui/icons-material/Search';

function header() {
  return (
   
      <div className='header'>
            <img className='header-logo' 
            src={img1} alt= ""/>
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
            </div>
      </div>

  )
}

export default header
