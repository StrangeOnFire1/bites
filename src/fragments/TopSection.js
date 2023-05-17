import React, { useState } from 'react'
import dishes from './images/dishes.png'
import drinks from './images/drinks.png'
import desserts from './images/dessert.png'
import platter from './images/platter.png'
import snacks from './images/snacks.png'
import dishesLogo from './images/dishes-logo.jpg'
import drinksLogo from './images/drinks-logo.jpg'
import dessertsLogo from './images/dessert-logo.jpg'
import platterLogo from './images/platter-logo.jpg'
import snacksLogo from './images/snacks-logo.jpg'




export default function TopSection() {

    const [topSecImg,settopSecImg] = useState(dishes)
    let dishesclick = (e)=>{
            settopSecImg(dishes);
            document.getElementById('navli2').removeAttribute('data-imgactive')
            document.getElementById('navli3').removeAttribute('data-imgactive')
            document.getElementById('navli4').removeAttribute('data-imgactive')
            document.getElementById('navli5').removeAttribute('data-imgactive')
            e.target.dataset.imgactive = 'true'
        }
    let drinksclick = (e)=>{
            settopSecImg(drinks);
            document.getElementById('navli1').removeAttribute('data-imgactive')
            document.getElementById('navli3').removeAttribute('data-imgactive')
            document.getElementById('navli4').removeAttribute('data-imgactive')
            document.getElementById('navli5').removeAttribute('data-imgactive')
            e.target.dataset.imgactive = 'true'
        }
    let dessertsclick = (e)=>{
            settopSecImg(desserts);
            document.getElementById('navli2').removeAttribute('data-imgactive')
            document.getElementById('navli1').removeAttribute('data-imgactive')
            document.getElementById('navli4').removeAttribute('data-imgactive')
            document.getElementById('navli5').removeAttribute('data-imgactive')
            e.target.dataset.imgactive = 'true'
        }
    let platterclick = (e)=>{
            settopSecImg(platter);
            document.getElementById('navli2').removeAttribute('data-imgactive')
            document.getElementById('navli3').removeAttribute('data-imgactive')
            document.getElementById('navli1').removeAttribute('data-imgactive')
            document.getElementById('navli5').removeAttribute('data-imgactive')
            e.target.dataset.imgactive = 'true'
        }
    let snacksclick = (e)=>{
            settopSecImg(snacks);
            document.getElementById('navli2').removeAttribute('data-imgactive')
            document.getElementById('navli3').removeAttribute('data-imgactive')
            document.getElementById('navli4').removeAttribute('data-imgactive')
            document.getElementById('navli1').removeAttribute('data-imgactive')
            e.target.dataset.imgactive = 'true'
        }
   


  return (
    <>
    <div className='top-sec'>
        <div className='top-sec-text'>
            <h1>We Serve The Taste You love ❤️</h1>
            <p>This is a type of restaurant which typically serves food and drinks,in addition to light refreshments such as baked goods 
            <span > or snacks. The term comes from the rench word meaning food.</span> </p>
            <button className='top-sec-btn' id='top-sec-btn1'>Explore Food</button>
            <button className='top-sec-btn' id='top-sec-btn2'><i className="fa-sharp fa-solid fa-magnifying-glass"></i> Search</button>
        </div>
        <div className='top-sec-imglist'>
            <div className='top-sec-img'>
                <img src={topSecImg} alt='dishes' />
            </div>    
            <div className='top-sec-list'>
                <ul>
                    <li data-imgactive id='navli1' onClick={function(e){dishesclick(e)}}><img className='items-logo-top-sec' src={dishesLogo} alt='dishesLogo'  /> Dishes</li>
                    <li id='navli2' onClick={function(e){drinksclick(e)}}><img className='items-logo-top-sec' src={drinksLogo} alt='drinksLogo'  /> Drinks</li>
                    <li id='navli3' onClick={function(e){dessertsclick(e)}}><img className='items-logo-top-sec' src={dessertsLogo} alt='dessertsLogo' /> Desserts</li>
                    <li id='navli4' onClick={function(e){platterclick(e)}}><img className='items-logo-top-sec' src={platterLogo} alt='platterLogo' /> Platter</li>
                    <li id='navli5' onClick={function(e){snacksclick(e)}}><img className='items-logo-top-sec' src={snacksLogo} alt='snacksLogo' /> Snacks</li>
                </ul>
            </div>
        </div>
    </div>
    
    
    </>
  )
}
