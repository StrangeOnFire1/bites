import React from 'react'
import pasta from './images/pasta-png.png'
import briyani from './images/biryani.png'
import eggRoll from './images/Egg-Roll-PNG-Picture.png'
import frenchFries from './images/french-fries-png.png'
import chickenSwarma from './images/chicken_shawarma-png.png'
import friedRice from './images/fried-Ricepng.png'
import fishCurry from './images/fish-curry.png'
import pannerTikka from './images/Paneer-Tikka-Masala.png'

export default function PopularDishes() {
  return (
    <>
    <div className='popular-dishes'>
        <div className='popular-dishes-heading'>
            <h1> Popular Dishes</h1>
            <p><i className="fa-solid fa-arrow-right"></i></p>
        </div>
        <div className='popular-dishes-cardsSection'>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={pasta} alt='pasta'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Pasta</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Pasta is a food typically made from an unleavened dough.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹125</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={frenchFries} alt='frenchFries'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>French Fries</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i>
                    </div>
                    <p> French fries are batonnet or allumette-cut deep-fried potatoes.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹90</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={chickenSwarma} alt='chickenSwarma'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Chicken shawarma</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                    </div>
                    <p> It consists of meat cut into thin slices and roasted on a slowly turning vertical rotisserie or spit.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹250</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={fishCurry} alt='fish curry'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Fish Curry</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                    </div>
                    <p>Fish curry is a spicy, curried dish blending the spices of a typical South Indian.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹190</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={friedRice} alt='fried rice'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Fried Rice</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i>
                    </div>
                    <p>Fried rice has a thick sauce poured and mixed over it which can include vegetables, and other ingredients.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹55</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={pannerTikka} alt='paneerTikka'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Paneer Tikka</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                    </div>
                    <p>It is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹210</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={briyani} alt='briyani'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Chicken Briyani</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i>
                    </div>
                    <p>It is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics steamed together.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹240</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className='popular-dishes-cards '>
                <div className='popular-dishes-cards-img '>
                     <img src={eggRoll} alt='egg roll'/>
                </div>
                <div className='popular-dishes-cards-text '>
                    <h3>Egg Roll</h3>
                    <div className='popular-dishes-cards-icon '>
                        <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i>
                    </div>
                    <p>An egg roll is a cylindrical, savory appetizer that’s usually deep-fried.</p>
                    <div className='popular-dishes-cards-symbols '>
                        <p>₹40</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
