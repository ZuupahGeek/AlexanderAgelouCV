import React from 'react'
import ResumeComponent from './ResumeComponent'

const SchoolComponent = () => {

    const schoolList = [
        {
          "id": 1,
          "date": "2020/08–2023/06",
          "location": "Stockholms Universitet",
          "title": "Marknadskommunikation (GI), Kandidatprogram",
          "description": "Programmets omfattning: Reklam och PR, marknadsföring, visuell kommunikation, hållbara affärsmodeller, CSR. Planning, strategi, projektledning och grafisk design. Fokus i slutet av programmet att agera som Creative Director och skapa en reklamplan för en startup."
        },
        {
          "id": 2,
          "date": "2019/09–2019/11",
          "location": "Berghs School of Communication",
          "title": "Grafisk Design Start",
          "description": "Kursens omfattning: Grafisk design, identitetsdesign, förpackningsdesign och branding."
        }
        
      ]
      

  return (
    <div className='schoolComponent'>
        <ResumeComponent resumeList={schoolList} heading="Education" key={schoolList.id}/>
    </div>
  )
}

export default SchoolComponent