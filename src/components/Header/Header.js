import React from 'react'
import logo from '../../assets/images/Starbucks_Corporation_Logo_2011.svg.png'
import './Header.css'

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
                <button className="location"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAlNJREFUWEft10uojVEUwPHfRRRJzFBEFFPCQCQmMiGPFANlRhkyUp4lZXQnlKRESiQyEUUxoSQThUKRgYgUUV4tPnU6vnP23t85t26y6usM9nr8z9p7rb32gGEmA8OMxz8DNAnrsRqzMKXK9Cs8xiVcwLvSHSjN0DTsxhaMTgT7ghM4hJe5YCVAG3A6A6Q99idsxJUcqFygXTic47CLzjYcS/nIAVqH8ylHGevfsQpXu+mmgGbiIcZkBMxR+YDZeN1JOQUUlbI2EWkf9lY68bsnoX8U25sAza2yk/rnpUBfMRlv6hx3y1CU94EUDUqBwuVWnCwFuo3FQwR0rmoFf7nvlqHnmF4DFBlplZuIL2RZ9bWu152p+5hXmqGPGFtjlCqEdpMfNT7eY2Ip0OcO5d4PoOje40qB4qKMamiXfmxZHIcZpUDXsWKIDvXlalIoOtRR8lH6KWlS9jtxpDRDC3A3RdOwD8UY86IUKPTjHouO3U1KM3QLSzs5TFXMJpzJyFKJSkyacUfWSgpoBB5VY2pJ0E669xBHoa43/bJJAYXOGlzsA01AzEd06Y6SAxTGg9jRI9T+jNEkK0PBEQP9A8xpCBU9bSW+pexzMxR+otruYHzKadt6bNESxN2YlBKgcBa3+TWMSnr+rfAUC/E2Uz97y1r9ba6eQ6kYMTcvQtxb2VKaoT+OA+oUoi3USUAsx7NskkqxKVCYx+MvmubItqBPqq2NaaFYegGKYHFYz2JqFflG1bfiudNIegWKoBNwvOroBxFv+sbSD6DGwesM/wOl0vkTjFJnJSpTO+AAAAAASUVORK5CYII="/>Find a store</button>
                <button className="sigin">Sigin in</button>
                <button className="join">Join now</button>
            </div>
        </div>
    </div>
  )
}

export default Header