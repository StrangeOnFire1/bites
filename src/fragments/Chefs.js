import React from 'react'
import chef1 from './images/chef1.jpg'
import chef2 from './images/chef2.jpg'
import chef3 from './images/chef3.jpg'
import chef4 from './images/chef4.jpg'
import chef5 from './images/chef5.jpg'
export default function Chefs() {
  return (
    <>
    <div className='chefs-section'>
        <h1>Meet Our Chefs</h1>
        <div className='chefs-cards-section'>
            <div className='chefs-cards'>
                <img src={chef1} alt=''/>
                <h3>Jonny Sins</h3>
            </div>
            <div className='chefs-cards'>
                <img src={chef2} alt=''/>
                <h3>Mia Khalifa</h3>
            </div>
            <div className='chefs-cards'>
                <img src={chef3} alt=''/>
                <h3>Sunny Leone</h3>
            </div>
            <div className='chefs-cards'>
                <img src={chef4} alt=''/>
                <h3>Eva Elfie</h3>
            </div>
            <div className='chefs-cards'>
                <img src={chef5} alt=''/>
                <h3>Danny Daniel</h3>
            </div>
        </div>
    </div>
    </>
  )
}
