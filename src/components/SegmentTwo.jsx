import React from 'react'
import Product from './Product'
import title2 from '../assets/title2.svg'
import "../App.css";

const SegmentTwo = () => {
  return (
    <div className='segment-two'>
        <div className='title2'>
      <img src={title2} alt="titlePic" className='' />
        </div>
      <Product/>
    </div>
  )
}

export default SegmentTwo
