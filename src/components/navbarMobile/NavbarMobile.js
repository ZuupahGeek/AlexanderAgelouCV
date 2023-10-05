import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarMobile.css'
import { HashLink } from 'react-router-hash-link';








const navbarMobile = () => {
  
  return (
    <nav className='navbar-mobile'>
      {/* <div className='navbar-mobile-header'> */}
        {/* <HashLink smooth to="/#home" >
          <img src={Headshot} alt="" />
        </HashLink> */}
      {/* </div> */}
      <div className='navbar-mobile-name'>
        <HashLink smooth to="/#home" > 
          <h1>Alexander Agelou</h1>
        </HashLink>
      </div>
      
      <div className='navbar-mobile-links'>
        
      
          <HashLink smooth to="/#about">
            <span>Profil</span>
          </HashLink>
        
      
          <HashLink smooth to="/#resume">
          <span>Erfarenhet</span>
          </HashLink>
        
      
          <HashLink smooth to="/#projects">
            <span>Portfolio</span>
          </HashLink>
        
     
      </div>
      <div className='navbar-mobile-socials'>
        <Link to="https://www.linkedin.com/in/alexander-agelou-57868b236/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.instagram.com/alexanderagelou/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://www.facebook.com/Alexander.agelou" target={'_blank'}><i className="fa-brands fa-facebook"></i></Link>
        
      </div>
    </nav>
  );
}


export default navbarMobile