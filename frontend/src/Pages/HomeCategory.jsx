import React from 'react';
import "./CSS/HomeCategory.css";
import dropdown_icon from "../Components/Assets/dropdown.PNG";
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { useContext } from 'react';
const HomeCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='home-category'>
            <img className="homecategory-banner" src={props.banner} alt="banner"/>
            <div className="homecategory-indexSort">
                <p>
                    <span>Showing 1-6</span> out of 36 products
                </p>
                <div className="homecategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>
                </div>
            </div>
            <div className="homecategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                       return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="homecategory-loadmore">
                Explore More 
            </div>    
        </div>
        
    );
};

export default HomeCategory;