import React from 'react'
import table from './images/table-chair-removebg-preview.png'
export default function Reservation() {
  return (
   <>
   <div className='reservation-section'>
        <div className='reservation-section-text'>
            <h2>Do You Have Any Dinner Plan Today? Reserve Your Table</h2>
            <p>Make online reservations, read restaurant reviews from diners and earn points towards free meals.OpenTable is a real-time online reservation.</p>
            <h4><button>Make Reservation <i className="fa-solid fa-up-right-from-square"></i></button></h4>
        </div>
        <div className='reservation-section-img'>
            <img src={table} alt='reservation-reference-img' />
        </div>
   </div>
   </>
  )
}
