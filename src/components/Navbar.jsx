import React from 'react'
import title from '../assets/title.png'
import grp1 from '../assets/grp1.svg'
import grp2 from '../assets/grp2.svg'

const Navbar = () => {
  return (
    <div className='navbar'>      
    <div>
      <img src={title} alt="titlePic" className='title' />
      <img src={grp2} alt="titlePic" className='title' />

    </div>
      <img src={grp1} alt="titlePic" className='title' />
    </div>
  )
}

export default Navbar
