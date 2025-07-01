import React from 'react';
import './DescriptionBox.css'; // Assuming you have a CSS file for styling

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Discover our exclusive collection of products, crafted with quality and style in mind. Each item is designed 
                    to meet your needs and exceed your expectations. Shop now and experience the best in fashion and innovation. 
                    Our team is dedicated to providing you with a seamless shopping experience, from browsing to checkout. Whether 
                    you are looking for the latest trends or timeless classics, our store offers something for everyone. Enjoy 
                    fast shipping, secure payments, and exceptional customer service every step of the way.
                </p>
                <p>
                    Our products are sourced from trusted suppliers, ensuring that you receive only the best. We take pride in our 
                    commitment to sustainability and ethical practices, so you can shop with confidence. Explore our range of 
                    categories, including clothing, accessories, and home decor, and find the perfect items to enhance your 
                    lifestyle. Join our community of satisfied customers and experience the difference today!
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;