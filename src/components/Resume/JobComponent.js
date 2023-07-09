import React from 'react'
import ResumeComponent from './ResumeComponent'

const JobComponent = () => {

    const jobList = [
        {
          "id": 1,
          "date": "2017/05–2020/01",
          "location": "Thernlunds Man & Woman (Gatt AB)",
          "title": "",
          "description1": "Butikssäljare",
          "description2": "Konfektionsansvarig",
          "description3": "Inventeringsansvarig"
        },
        {
          "id": 2,
          "date": "2016/08–2017/04",
          "location": "Catering by Pontus",
          "title": "",
          "description1": "Servis"
        }
      ]

  return (
    <div className='jobComponent'>
        <ResumeComponent resumeList={jobList} heading="Professional Experience" key={jobList.id} />
    </div>
  )



}

export default JobComponent


