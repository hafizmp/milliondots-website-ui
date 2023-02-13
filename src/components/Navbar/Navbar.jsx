import React, { useState } from 'react'
import "./Navbar.scss"
import { images } from "../../constants";
import { Fade as Hamburger } from 'hamburger-react'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const handleClick = () => setToggle(!toggle)

  return (
    <div className='navbar'>
      <div className="navbar__logo">
        <img src={images.logo} alt="" />
      </div>
      <div className={toggle ? "navbar__links toggle" : "navbar__links"} onClick={() => setToggle(false)}>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Sapphire</a>
          <a href="/">Contact us</a>
          <button>Let's Talk</button>
        </div>
      </div>
      <div className='nav__links' onClick={handleClick}>
        <Hamburger size={25} duration={0.8} toggled={toggle} toggle={setToggle} />
      </div>
    </div>
  )
}

export default Navbar