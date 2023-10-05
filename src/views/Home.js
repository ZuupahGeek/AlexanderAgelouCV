import React from 'react'
import './Home.css'
import BackgroundImg from '../assets/CV23G-bgCropped.png'





const Home = () => {
  return (

        <div className='background-img'>
            <h2>Alexander Agelou</h2>
            {/* <h4>Junior Frontend Developer</h4> */}
            <img src={BackgroundImg} alt="Alexander Agelou Background" />
            
        </div>

  )
}

export default Home