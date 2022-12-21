import React from 'react'
import './header.js'


function header() {
  return (
   
      <div className='header'>
            <img className='header-logo' 
            src='logo.png'/>
            <div className='header_search'>
                <input className='header_searchInput' type="text"/>
            </div>
            <div className='header_nav'></div>
      </div>

  )
}

export default header
