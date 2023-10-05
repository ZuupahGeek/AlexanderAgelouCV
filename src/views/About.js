import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about-page'>
        <h1>Profil</h1>
        <div className='about-intro'>
            <p>Kreativ och ansvarstagande kreatör med passion för design och
kommunikation. Ett skarpt sinne för att möta kunders önskningar.
Utbildad inom marknadsföring, visuell kommunikation, projektledning,
hållbara affärsmodeller. Arbetat pro bono för mediaprofiler som Robin
Berglund och Marcus Thapper. Skapat visuella uttag i form av affischer
och omslag till podcasts och standup-produktion. Över två års erfarenhet
inom klädesbranschen och försäljning.</p>
        </div>
        <div className='about-info'>
            <div>
            <h4>Kompetenser</h4>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <p>Adobe CC</p>
                        <li>Illustrator</li>
                        <li>InDesign</li>
                        <li>Photoshop</li>
                    </div>
                    <div className='grid-item'>
                        <p>Program</p>
                        <li>Office-paketet</li>
                        <li>Figma</li>
                    </div>
                    <div className='grid-item'>
                        <p>Språk</p>
                        <li>Svenska</li>
                        <li>Engelska</li>
                        <li>Grekiska</li>
                    </div>
                    <div className='grid-item'>
                        <p>Övrigt</p>
                        <li>Service Minded</li>
                        <li>Textilkunskaper</li>
                        <li>Försäljning</li>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default About