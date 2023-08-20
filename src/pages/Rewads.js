import React from 'react'
import back from '../assets/images/xl-hero.jpg'
import {Gettings} from '../data'
import './Reawds.css'

const Rewads = () => {
  return (
    <> 
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
    <div className='getting-container'>
         <h2>Getting started is easy</h2>
         <p>Earn Stars and get rewarded in a few easy steps.</p>
         <div className='gettieg-content' >
      {Gettings.map((item)=> {
        const {id,icon,title,text}=item
        return (
          
            <div className='content' key={id}>
            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            </div>
        )
      })
    }
      </div>
     

    </div>
    </>
  )
}

export default Rewads