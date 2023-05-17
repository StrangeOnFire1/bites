import React from 'react'
import phoneImg from './images/phone.png'
export default function Download() {
    return (
        <>
            <div className='download-section'>
                <div className='download-section-text'>
                    <h2>Never Feel Hungry!</h2>
                    <h2>Download Our Mobile App</h2>
                    <h2>Enjoy Delicious Foods</h2>
                    <p>Make online reservations,read restaurant reviews from diners and earn points towards free meals. OpenTable is a real-time online reservation.</p>
                    <h3>
                        <button><i className="fa-brands fa-apple"></i><p>Download on the <b>Apple Store</b></p></button>
                        <button><i className="fa-brands fa-google-play" style={{color: '#005eff'}}></i><p>Download on the <b>Play Store</b></p></button>
                    </h3>
                </div>
                <div className='download-section-img'>
                    <img src={phoneImg} alt='phoneimg' />
                </div>
            </div>
        </>
    )
}
