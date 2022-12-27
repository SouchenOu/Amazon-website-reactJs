import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';

function product({title, image,price}) {
  return (
    <div className='product'>
      <div className='product_info'>
       <p>{title}</p>
       <p className='productPrice'>
            <small>$</small>
            <strong>{price}</strong>
       </p>
       <div className='productRating'>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
            <StarIcon className='starIcon'/>
       </div>
      </div>
      <img className="book1" src={image} alt=""/>
      <button>Add to basket</button>
    </div>
  );
}

export default product
