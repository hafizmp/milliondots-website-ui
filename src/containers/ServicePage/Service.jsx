import React from 'react'
import "./Service.scss"
import { images } from '../../constants'
import { GiEarthAmerica } from "react-icons/gi"
import { AiFillPlaySquare } from "react-icons/ai"
import { IoIosPeople } from "react-icons/io"
import { MdAreaChart } from "react-icons/md"

const Service = () => {
  return (
    <section className='service'>
      <div className="service__container">
        <div className="service-head">
          <h1>Become a Pro trader from absolute basics..</h1>
          <p>Learn proven methods of trading from basics to aLearn proven methods of trading from basics to an expert level, and help you to apply what learned and trade professional way.n expert level, and help you to apply what learned and trade professional way.</p>
        </div>
        <div className="service-details">
          <div className="membership-card">
            <img src={images.award} alt="" />
            <div className="heading">
              <h1>Sapphire Membership</h1>
            </div>
            <div className="line"></div>
            <div className="lists">
              <ul>
                <li>Learn Stocks, Options, Forex, Crypto trading</li>
                <li>Live sessions & Video sessions on Milliondots app/web</li>
                <li>Access to Milliondots trader's ecosystem</li>
                <li>Live support from mentors</li>
                <li>Daily postmarket sessions</li>
                <li>Practical training</li>
              </ul>
            </div>
            <div className="price">
              <h5>₹ 43,500 /year</h5>
            </div>
          </div>

          <div className="services-info">
            <div className="info-img">
              <img src={images.serviceImg} alt="" />
            </div>
            <div className="info-cards">
              <div className="i-card">
                <div className="iconarea" style={{ background: "#7A50F9" }}>
                  <GiEarthAmerica color='white' size={38} />
                </div>
                <h6>Join us from anywhere in the world.</h6>
              </div>
              <div className="i-card">
                <div className="iconarea" style={{ background: "#05CD99" }}>
                  <AiFillPlaySquare color='white' size={30} />
                </div>
                <h6>Learn with live & video sessions from mentors.</h6>
              </div>
              <div className="i-card">
                <div className="iconarea" style={{ background: "#00B0C6" }}>
                  <IoIosPeople color='white' size={35} />
                </div>
                <h6>Trade together within trader's ecosystem monitored my mentors</h6>
              </div>
              <div className="i-card">
                <div className="iconarea" style={{ background: "#FF8900" }}>
                  <MdAreaChart color='white' size={35} />
                </div>
                <h6>Earn experience from losses and money from profits</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service