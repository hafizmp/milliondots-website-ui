import React from 'react'
import "./Hero.scss"
import { images } from "../../constants";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__container">
        <div className="content">
          <h1>Want to be a successful trader ?</h1>
          <span>Learn & trade together with india’s #1
            Trusted by over 4500+ Traders
          </span>
          <button>Get Started</button>
        </div>
        <div className="bg">
          <img src={images.heroImg} alt="" />
        </div>
      </div>
        <img className='vector' src={images.lineVector} alt="lv" />
    </div>
  )
}

export default Hero