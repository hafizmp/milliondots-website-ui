import React from 'react'
import "./Enroll.scss"
import { images } from '../../constants'

const Enroll = () => {
  return (
    <section className='enroll'>
      <div className="enroll__container">
        
        <div className="en-box">
          <div className="en-details">
            <h1>#1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis laoreet ornare quisque est. Tincidunt ultrices potenti consectetur nibh placerat ultricies. Purus auctor ultrices porttitor sodales</p>
          </div>
          <div className="en-img">
            <img src={images.contactImg} alt="" />
          </div>
          <div className="en-form">
            <img src={images.ribbon} alt="" />
            <h3>Are you ready to start Trading?</h3>
            <span>Lorem ipsum dolor sit amet, </span>
            <button>Enroll Now</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Enroll