import React from 'react';
import "./checkout.css";
import img66 from "./img/img.jpeg";
import Subtotal from "./subtotal";


function checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='image_checkout' src={img66} alt=""/>
        <div> 
            <h2 className='checkoutTitle'>Your shooping basket</h2>

        </div>
        </div>  
        <div className='checkout__right'>
          <Subtotal />
            <h2>The subtotal will go here</h2>
        </div>
    </div>
  );
}

export default checkout
