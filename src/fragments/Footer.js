import React from 'react'
import logo from './images/website-logo.png'
export default function Footer() {
  return (
    <>
      <img className='footer-logo' src={logo} alt='logo' />
      <div className='footer'>
        <div className='footer-divs footer-div-1'>
          <h2>Subscribe Our Newsletter</h2>
          <input type='email' name='email' placeholder='Enter your E-mail' />
          <i className="fa-solid fa-arrow-right"></i>
          <p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </p>
        </div>

        <div className='footer-divs footer-div-2'>
          <h2>Service</h2>
          <p>Online-order</p>
          <p>Pre-reservation</p>
          <p>24/7 service</p>
          <p>Foddie Place</p>
          <p>Super Chefs</p>
        </div>

        <div className='footer-divs footer-div-3'>
          <h2>Quick Links</h2>
          <ul >
            <li>
              <a aria-current="page" href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li >
              <a href="#">Order Online</a>
            </li>
            <li >
              <a href="#">Reviews</a>
            </li>
            <li >
              <a href="#">About Us</a>
            </li>
            <li >
              <a href="#">Contacts</a>
            </li>
          </ul>
        </div>

        <div className='footer-divs footer-div-4'>
          <h2>About</h2>
          <p>Our Story</p>
          <p>Benifits</p>
          <p>Carrer</p>
          <p>Our Chefs</p>
        </div>

        <div className='footer-divs footer-div-5'>
          <h2>Help</h2>
          <p>Contact</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>
      </div>
      <div id="author">
        <h1>Made with ❤️ by <span>Ayush Kumar</span></h1>
      </div>
    </>
  )
}
