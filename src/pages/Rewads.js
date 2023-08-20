import React from 'react'
import back from '../assets/images/xl-hero.jpg'
import './Reawds.css'

const Rewads = () => {
  return (
    <div className='slider'>
      <div className='slider-content'>
        <h1>FREE COFFEEIS <br/>A TAP AWAY</h1>
        <p className='slider-text-1'> Join now to start earning Rewards.</p>
        <button className='btn-join'>Join</button>
        <p className='slider-text-2'>Or join in the app for the best experience</p>
      </div>
      <div className='backgournd'> 
          <img src={back} alt='backgournd' />
      </div>
    </div>
  )
}

export default Rewads