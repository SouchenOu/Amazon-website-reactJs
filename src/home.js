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
import img14 from './img/book12.jpeg';
import img15 from './img/book13.jpeg';
import img16 from './img/book14.jpg';
import img17 from './img/book15.jpeg';
import img18 from './img/book16.jpeg';
import img19 from './img/book17.jpeg';
import img20 from './img/book18.jpg';
import img21 from './img/book19.jpeg';
import img22 from './img/book20.jpg';
import img23 from './img/book21.jpg';
import img24 from './img/book22.jpeg';
import img25 from './img/book23.jpg';
import img26 from './img/book24.jpeg';
import img27 from './img/book25.jpeg';
import img28 from './img/book26.jpeg';
import img29 from './img/book27.jpg';
import img30 from './img/book28.jpeg';
import img31 from './img/book29.jpg';
import img32 from './img/book30.jpg';
import img33 from './img/book31.jpeg';
import img34 from './img/book32.jpeg';
import img35 from './img/book33.jpeg';
import img36 from './img/book34.jpg';
import img37 from './img/book35.jpg';
import img38 from './img/book36.jpg';




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
                    <Product title = "Mission Possible" image= {img15} price = {19.22}/>
                    <Product title = "Strength in faith devotional" image= {img16} price = {20.12}/>
                    <Product title = "Everyday faith" image= {img17} price = {12.32}/>
                    <Product title ="Hearing his voice" image={img18} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "The mountain is you" image= {img19} price = {19.22}/>
                    <Product title = "Things we hide from the light" image= {img20} price = {20.12}/>
                    <Product title = "The subtle art of not giving a fuck" image= {img21} price = {12.32}/>
                    <Product title ="Where the grawDads sing" image={img22} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "The wings of fire" image= {img23} price = {19.22}/>
                    <Product title = "Stephen king" image= {img24} price = {20.12}/>
                    <Product title = "Kristin hannah" image= {img25} price = {12.32}/>
                    <Product title ="Girl in Pieces" image={img26} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "The Real Witches Garden" image= {img27} price = {19.22}/>
                    <Product title = "Faith still moves mountains" image= {img28} price = {20.12}/>
                    <Product title = "The body keeps the score" image= {img29} price = {12.32}/>
                    <Product title ="How the Gring stole christmas" image={img30} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "POLICEMAN" image= {img31} price = {19.22}/>
                    <Product title = "LESSON in chemistry" image= {img32} price = {20.12}/>
                    <Product title = "Slow horses" image= {img33} price = {12.32}/>
                    <Product title ="Dead lions" image={img34} price = {15.14}/>
                 </div>
                 <div className='home_row'>
                    <Product title = "The Hite report on male sexuality" image= {img35} price = {19.22}/>
                    <Product title = "Verity" image= {img36} price = {20.12}/>
                    <Product title = "Tomorrow and tomorrow and tomorow" image= {img37} price = {12.32}/>
                    <Product title ="Asimov foundation" image={img38} price = {15.14}/>
                 </div>
                
              
            </div>
        </div>

    );
}

export default home;