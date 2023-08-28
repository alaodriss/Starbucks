import React from 'react'
import back from '../assets/images/xl-hero.jpg'
import {Gettings} from '../data'
import {dataEndless} from '../data'
import './Reawds.css'
import TabPanel from '../components/TapPanel/TapPanel'
import { Link } from 'react-router-dom'

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

        <TabPanel />

        <div className='endless-container'>
              <h2>Endless Extras</h2>
              <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. <br/> Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
              <div className='endless-content' >
            {dataEndless.map((item)=> {
              const {id,img,title,text,Link}=item
              return (
                  <div className='endless' key={id}>
                  <img src={img} alt={title} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span> <a href={Link}>Voir plus</a></span>
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