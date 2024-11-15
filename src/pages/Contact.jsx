import React from 'react'
import { useEffect } from 'react'
// import iamges/////////////////////
import p1 from '../images/people/1.png'
import p2 from '../images/people/2.png'
import p3 from '../images/people/3.png'
function Contact() {
  useEffect(()=>{
    window.scrollTo({top:0,left:0})
  },[])
  return (
    <>
      <section className="abouthero ">
        <div className="content center">
          <h2>#Let us talk</h2>
          <p>Leave a message. We love to hear from you</p>
        </div>

      </section>
      <section className='contact'>
        <div className="info">
          <p>Get in touch</p>
          <h2>Visit on our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <ul>
            <li>56 Glassford street Glasgow G1 1UL Newyork</li>
            <li>contact@example.com</li>
            <li>123456789</li>
            <li>Monday to Saturday 9:00 to 16:00</li>
          </ul>
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088029522687!2d-1.256941724324388!3d51.754819692599625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2s!4v1717620561633!5m2!1sen!2s" style={{ style: "border:0;" }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <section className='contact cform'>
        <div className="info">
          <p>leave a message</p>
          <h3>We love to hear from you</h3>
          <input className='cinput' placeholder='Your name' type="text" />
          <input className='cinput' placeholder='Email' type="text" />
          <input className='cinput' placeholder='Subject' type="text" />
          <textarea className='cinput' placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
          <button className='shopbtn'>Submit</button>
        </div>
        <div className="map people">
          <div className='p1'>
            <img src={p1} alt="" />
            <div>
              <h3>John Doe</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>
          <div className='p1'>
            <img src={p2} alt="" />
            <div>
              <h3>William Smith</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>
          <div className='p1'>
            <img src={p3} alt="" />
            <div>
              <h3>Emma stone</h3>
              <p>Senior Marketing Manager</p>
              <p>Phone: +001 2345 198</p>
              <p>Email: contact@example.com</p>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Contact