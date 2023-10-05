import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Headshot from '../../assets/CV23G-cropped.png'
import { HashLink } from 'react-router-hash-link';


// let activeStyle = {
//   textDecoration: "underline",
//   color: "green",
// };





const Navbar = () => {
  
  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <HashLink smooth to="/#home" >
          <img src={Headshot} alt="" />
        </HashLink>
      </div>
      <div className='navbar-name'>
        <HashLink smooth to="/#home" > 
          <h1>Alexander Agelou</h1>
        </HashLink>
      </div>
      <div className='navbar-socials'>
        <Link to="https://www.linkedin.com/in/alexander-agelou-57868b236/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
        <Link to="https://www.instagram.com/alexanderagelou/" target={'_blank'}><i className="fa-brands fa-instagram"></i></Link>
        <Link to="https://www.facebook.com/Alexander.agelou" target={'_blank'}><i className="fa-brands fa-facebook"></i></Link>
        
      </div>
      <ul className='navbar-links'>
        
        <li>
          <HashLink smooth to="/#about">
            <span>Profil</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#resume">
          <span>Erfarenhet</span>
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects">
            <span>Portfolio</span>
          </HashLink>
        </li>
     
      </ul>
    </nav>
  );
}


export default Navbar