import React from 'react'
import "./Contact.scss"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { images } from '../../constants'

const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact__container">
        <div className="c-links">
          <h2>Do you have a question? <br />Feel free to contact</h2>
          <div className="contacts">
          <div className="links">
            <div className="icons" style={{ background: "linear-gradient(90deg, #FFDB00 -13.32%, #FF8900 105.84%)" }}>
              <BsFillTelephoneFill color='white' size={14} />
            </div>
            <h4> +91  383 766 284 </h4>
          </div>
          <div className="links">
            <div className="icons" style={{ background: "linear-gradient(90deg, #FFDB00 -13.32%, #FF8900 105.84%)" }}>
              <AiFillMail color='white' size={14} />
            </div>
            <h4>mail@milliondotsedu.com</h4>
          </div>
          </div>
          
        </div>
        <div className="c-rating">
          <h2>4.7</h2>
          <p>Ratings In Google Business</p>
          <img src={images.stars} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact