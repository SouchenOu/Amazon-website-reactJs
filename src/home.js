import React from 'react'
import './home.css'
import img2 from './img/home.jpeg';
import Product from './product'
import img3 from './img/book1.jpeg';
import img4 from './img/book2.jpeg';
import img5 from './img/book3.jpg';
import img6 from './img/book4.jpeg';
import img7 from './img/book5.jpg';
import img8 from './img/book6.jpeg';
import img9 from './img/book7.jpeg';
import img10 from './img/book8.jpg';
import img11 from './img/book9.jpeg';
import img12 from './img/book10.jpeg';
import img13 from './img/book11.jpeg';
import img14 from './img/book12.jpeg'

function home(){

    return (


        <div className='Home'>
            <div className='home_container'>
                <img className='Home_image' src={img2} alt=""/>

         
                <div className='home_row'>
                    <Product title="Atomic Habits" image= {img3} price= {11}/>
                    <Product title="Think like a monk" image={img4} price = {13}/>
                    <Product title="It starts with us" image={img5} price = {14}/>
                    <Product title="lighter" image={img6} price = {12}/>

                </div>
                <div className='home_row'>
                    <Product title= "The light we carry" image = {img7} price = {18}/>
                    <Product title= "It Ends with us" image= {img8} price= {15}/>
                    <Product title="Ugly love" image = {img14} price= {13}/>
                    <Product title= "spare" image = {img9} price = {11}/>

                </div>
                <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "Power" image= {img10} price = {19.22}/>
                    <Product title = "Reminders of him" image= {img11} price = {20.12}/>
                    <Product title = "Seven Husbands" image= {img12} price = {12.32}/>
                    <Product title ="Harry Potter" image={img13} price = {15.14}/>
                 </div>
              
            </div>
        </div>

    );
}

export default home;