import React,{useState} from 'react'
import logo from '../../assets/images/Starbucks_Corporation_Logo_2011.svg.png'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {

  const [activeLink, setActiveLink] = useState('/');


  return (
    <>
    <div className='header'>
        <div className='header-content'>
            <div className='header-menu'>
            <img src={logo} className='logo' alt='logo'/>
            <ul className='bottom-navigation-bar'>
      <li>
        <Link
          exact
          to="/"
          className={activeLink === '/' ? 'active' : ''}
          onClick={() => setActiveLink('/')}
        >
          Menu
        </Link>
      </li>
      <li>
        <Link
          to='/rewards'
          className={activeLink === '/rewards' ? 'active' : ''}
          onClick={() => setActiveLink('/rewards')}
        >
          Rewards
        </Link>
      </li>
      <li>
        <Link
          to='/cards'
          className={activeLink === '/cards' ? 'active' : ''}
          onClick={() => setActiveLink('/cards')}
        >
          Git cards
        </Link>
      </li>
    </ul>
      </div>
            <div className='header-infos'>
                <button className="location"><span><i class="fa-solid fa-location-dot" ></i></span>Find a store</button>
                <button className="sigin">Sigin in</button>
                <button className="join">Join now</button>
            </div>
        </div>
    </div>
      <div className='bar'>
      <p>Starbucks® Rewards</p> 
</div>
</>
  )
}

export default Header