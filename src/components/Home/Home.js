import React from 'react';
import image from '../../utilities/laptop.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='product-container'>
            <div className="product-detail">
              <h1 >Buying the <span className='product-title'>BEST ONE!!</span></h1>
              <p>Now available with an OLED screen, an 8TB SSD, and Intel "Tiger Lake-H" processing, the Dell XPS 15 is our top pick among premium desktop-replacement laptops.</p>
            </div>
            <div className="product-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;