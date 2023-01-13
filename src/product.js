import React from 'react'
import './product.css'
import StarIcon from '@mui/icons-material/Star';
import {UseStateValue} from "./StateProvider";



function product({id , title, image,price}) {
  const [{ shariot }, dispatch] = UseStateValue();

  console.log("this is the shariot", shariot);
  const addToShario = () => {
    //dispatch the item into the data layer
    dispatch({
        type:"ADD_TO_SHARIOT",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
        },

    });
  };
  
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
      <button onClick={addToShario} >Add to shariot</button>
    </div>
  );
}

export default product
