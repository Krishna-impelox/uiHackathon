import React from 'react'
import box from '../assets/box1.svg'
import button from '../assets/buyNow.svg'
import "../App.css";

const SegOneBody = () => {
  return (
    <div className='box2Main'>
      <img src={box} alt="titlePic" className='box1' />
      <div className='box2'>
        <p className='box2-text'>Nike React
            <span className='box2-textSub'>
            Infinity Run 2
            </span>
       </p>
       <p className='loream'>
       Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.
       </p>
      <img src={button} alt="titlePic" className='buynow' />

      </div>
    </div>
  )
}

export default SegOneBody
