import React from 'react'
import './home.css'
import img2 from './img/home.jpeg';
import Product from './product'
function home(){

    return (


        <div className='Home'>
            <div className='home_container'>
                <img className='Home_image' src={img2} alt=""/>

            </div>
           <div className='home_row'>
                <Product/>
           </div>
           <div className='home_row'>

           </div>
           <div className='home_row'>

           </div>
              

        </div>

    );
}

export default home;