import React from 'react'
import logo from '../../assets/images/Starbucks_Corporation_Logo_2011.svg.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-content'>
            <div className='header-menu'>
            <img src={logo} className='logo' alt='logo'/>
                <ul>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Rewads</a></li>
                    <li><a href='#'>Git cards</a></li>

                </ul>
            </div>
            <div className='header-infos'>
                <button className="location"><i class="fa-solid fa-location-dot" ></i>Find a store</button>
                <button className="sigin">Sigin in</button>
                <button className="join">Join now</button>
            </div>
        </div>
        <div className='bar'>
                <p>Starbucks® Rewards</p> 
        </div>
    </div>
  )
}

export default Header