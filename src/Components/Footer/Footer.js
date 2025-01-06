import React from 'react'
import './footer.css'
import logo from '../Assets/logo.jpg';
import instagram from '../Assets/instagram_icon.png'
import pinterest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt=''/>
        <p>STYLEON</p>
      </div>
      <ul className='footer-links'>
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>
      </ul>
      <div className='footer-social-icons'>
        <div className='footer-icons-container'>
        <img src={instagram} alt=''/>
        </div>
        <div className='footer-icons-container'>
        <img src={pinterest} alt=''/>
        </div>
        <div className='footer-icons-container'>
        <img src={whatsapp} alt=''/>
        </div>
      </div>
      <div className='footer_copyright'>
        <hr/>
        <p>Copyright @2024- All Right Reserved (Deepika)</p>
      </div>
    </div>
  )
}

export default Footer
