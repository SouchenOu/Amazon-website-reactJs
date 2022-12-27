import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import img3 from './img/book1.jpeg';

function product() {
  return (
    <div className='product'>
      <div className='product_info'>
       <p>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</p>
       <p className='productPrice'>
            <small>$</small>
            <strong>11</strong>
       </p>
       <div className='productRating'>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
       </div>
      </div>
      <img className="book1" src={img3} alt=""/>
    </div>
  );
}

export default product
