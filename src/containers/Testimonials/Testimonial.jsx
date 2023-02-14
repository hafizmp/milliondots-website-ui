import React from 'react'
import "./Testimonial.scss"
import { images } from '../../constants'

const Testimonial = () => {
  return (
    <section className='testimonial'>
      <div className="testimonial__container">
        <div className="test-content">
          <div className="test-img">
            <img src={images.hand} alt="hand" />
          </div>
          <div className="testbtn">TESTIMONIALS</div>
          <h3>Hear from our customers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis laoreet ornare quisque est. Tincidunt ultrices potenti consectetur nibh placerat ultricies. Purus auctor ultrices porttitor sodales integer at imperdiet at. Sed proin feugiat nisl, convallis curabitur duis vitae, malesuada. </p>
          <button>Explore FAQ's</button>
        </div>
        <div className="test-accords">
          <div className="accord">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis laoreet ornare quisque est. Tincidunt ultrices potenti consectetur ."</p>
            <div className="profile">
              <img src={images.avatar} alt="avatar" />
              <div className="name">
                <h6>Tony Adams</h6>
                <span>FastTech CEO</span>
              </div>
            </div>
          </div>
          <div className="accord">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis laoreet ornare quisque est. ntitetur ."</p>
            <div className="profile">
              <img src={images.avatar} alt="avatar" />
              <div className="name">
                <h6>Tony Adams</h6>
                <span>FastTech CEO</span>
              </div>
            </div>
          </div>
          <div className="accord">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis laoreet ornare quisque est. Tincidunt ultricesti consectetur ."</p>
            <div className="profile">
              <img src={images.avatar} alt="avatar" />
              <div className="name">
                <h6>Tony Adams</h6>
                <span>FastTech CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial