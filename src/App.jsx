import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Link, Outlet } from 'react-router-dom'

//import images
import logo from './images/mainlogo.png'
import payimg from './images/pay/pay.png'
import payimg2 from './images/pay/play.jpg'



function App() {

  const [barclicked, setbarclicked] = useState(false)
  return (
    <>
      <div className="header">
        <a href=""><img className="logo" src={logo} alt="alt" /></a>
        <div className={barclicked ? "navslide nav" : "nav"} >
          <Link className="tabs " to={""}>Home</Link>
          <hr />
          <Link className="tabs " to={"shop"}>Shop</Link>
          <hr />
          <Link className="tabs" to={"blog"}>Blog</Link>
          <hr />
          <Link className="tabs" to={"about"}>About</Link>
          <hr />
          <Link className="tabs" to={"contact"}>Contact</Link>
          <hr />
          <Link className="tabs" to={"cart"}>Cart</Link>


          {/* <i id="close" className="fa-solid fa-xmark"></i> */}
          {/* <FontAwesomeIcon id='close' icon={faXmark} /> */}


        </div>
        {/* <i id="bar" className="fa-solid fa-chart-bar"></i> */}
        <FontAwesomeIcon onClick={() => { setbarclicked((prev) => !prev) }} id="bar" icon={faBars} />
      </div>
      <Outlet />

      <div className="newsletter">
        <div className="nlcontent ">
          <h2>Sign Up For Newsletter</h2>
          <p>Get latest update about our latest shop and special offer </p>
        </div>
        <div className="nlinput">
          <input type="email" name="" id="" placeholder="Your Email Address" />
          <button>Sign up</button>
        </div>
      </div>
      <footer className='footer'>
        <div>
          <img src={logo} alt="" />
          <h3>Contact</h3>
          <p><span className="bold">Address:</span>562 Wallington Road Street 32 San Fransisco</p>
          <p><span className="bold">Phone:</span>+01 2222 365 / +01 3333 456</p>
          <p><span className="bold">Hours:</span>10.00-18.00, Mon-Sat</p>
          <h3 className="followus">Follow us</h3>
          <a target="_blank" href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a><a target="_blank" href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a><a target="_blank" href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a><a target="_blank" href="https://www.pinterest.com"><i className="fa-brands fa-pinterest"></i></a><a target="_blank" href="https://www.youtube.com"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div>
          <h3>About</h3>
          <p>about us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
          <p>Contact us</p>
        </div>
        <div>
          <h3>My contact</h3>
          <p>Sign in</p>
          <p>View cart</p>
          <p>Mywallet</p>
        </div>
        <div className="appscont">
          <h3>Install App</h3>
          <p>From appstore or google play</p>
          <div className="apps">

            <img src={payimg2} alt="" />
            <img src={payimg2} alt="" />
          </div>
          <p>Secure payment gateway</p>
          <img className="payimg" src={payimg} alt="" />
        </div>

      </footer>

    </>
  )
}

export default App
