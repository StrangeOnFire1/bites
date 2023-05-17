import React from 'react'
import chefService from './images/chef-removebg-preview.png'
import onlineOrder from './images/order.png'
import chair from './images/chair.png'
import Oraganized from './images/organizer.png'
import chef from './images/cooking.png'
import alldayservice from './images/24-7.png'
import clean from './images/broom.png'
export default function Services() {
  return (
    <>
    <div className='services-sec'>
        <div className='services-sec-img'>
            <img src={chefService} alt='chef service'/>
        </div>  
        <div className='services-sec-text'>
            <h1>We Are More Than Multiple Service 👨‍🍳</h1>
            <p>This is a type of restaurant which typically serves food and drinks,in addition to light refreshments such as baked goods or snacks.The term comes from the rench word meaning food.</p>
            <div className='service-des'>
                <div className='service-h6-section'>
                    <h6 id='h61'><img src={onlineOrder} alt=''/> Online Order</h6>
                    <h6 id='h62'><img src={chair} alt=''/> Pre-Reservation</h6>
                </div>
                <div className='service-h6-section'>
                    <h6 id='h63'><img src={alldayservice} alt=''/> 24/7 Services</h6>
                    <h6 id='h64'><img src={Oraganized} alt=''/> Oraganized Foodie Place</h6>
                </div>
                <div className='service-h6-section'>
                    <h6 id='h65'><img src={clean} alt=''/> Clean Kitchen</h6>
                    <h6 id='h66'><img src={chef} alt=''/> Super Chefs</h6>
                </div>
            </div>
            <h5><button>About Us</button></h5>
        </div>  
    </div>   
    </>
  )
}
