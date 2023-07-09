import React from 'react';
// import { Link } from 'react-router-dom';
import './ProjectComponent.css';
import ImgKris from "../../assets/kris.png";
import ImgFMCorner from "../../assets/FMCORNER.png";
import ImgOutro from "../../assets/outro.png";
import ImgSusanne from "../../assets/Susanne_Evolution_C.png";

const ProjectComponent = () => {

    const portfolioList = [
        {
          "id": 1,
          "imgURL": ImgKris,
          "imgAlt": "Kris Turnén header"
        },
        {
          "id": 2,
          "imgURL": ImgFMCorner,
          "imgAlt": "Thapper Football Manager Loading screen"
        },
        {
          "id": 3,
          "imgURL": ImgOutro,
          "imgAlt": "Thapper Stream Outro"
        },
        {
          "id": 4,
          "imgURL": ImgSusanne,
          "imgAlt": "Studio Susanne Digital Art"
        },
        
        
      ]

      const portfolioListMap = portfolioList.map(
        (element, id) => {
          return (
            <div className='portfolio-card' key={id}>
                <div className='portfolio-content' >
                    
                    <img src={element.imgURL} alt="portfolio" />
                    
                  
                    
                </div>
            </div>
                
          ) 
        }
      )


  return (
    <div className='portfolio-collection'>
        {portfolioListMap} 
    </div>
  )
}

export default ProjectComponent