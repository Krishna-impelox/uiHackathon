import React from 'react'
import '../App.css';
import Navbar from './Navbar';
import SegOneBody from './SegOneBody';
import SegmentTwo from './SegmentTwo';

const SegmentOne = () => {
  return (
    <div className="segment-one">
        <Navbar />
        <SegOneBody/>

    </div>
  )
}

export default SegmentOne
