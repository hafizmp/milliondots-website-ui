import React from 'react'
import "./About.scss"
import { images } from '../../constants'

const About = () => {
  return (
    <section className='about'>
      <div className="about__container">
        <div className="about-datas">
          <div className="card">
            <div className="icon">
              <img src={images.icon1} alt="" />
            </div>
            <div className="data">
              <h4>4500+</h4>
              <h6>Students Learned.</h6>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={images.icon2} alt="" />
            </div>
            <div className="data">
              <h4>28+</h4>
              <h6>Cities Learned.</h6>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <img src={images.icon3} alt="" />
            </div>
            <div className="data">
              <h4>5+</h4>
              <h6>Countries Learned.</h6>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="details">
            <h1>By traders,<br></br> To traders to be.</h1>
            <span>Building India's one and only trader's ecosystem</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut proin ipsum augue tortor duis
              laoreet ornare quisque est. Tincidunt ultrices potenti consectetur nibh placerat ultricies.
              Purus auctor ultrices porttitor sodales integer at imperdiet at. Sed proin feugiat nisl.
            </p>
          </div>
          <div className="details-img">
            <img src={images.phoneImg} alt="" />
          </div>
        </div>
        <img className='onevector' src={images.onevector} alt="" />
      </div>
    </section>
  )
}

export default About