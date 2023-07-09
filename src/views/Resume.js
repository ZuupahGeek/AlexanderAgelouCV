import React from 'react'
import JobComponent from '../components/Resume/JobComponent'
import SchoolComponent from '../components/Resume/SchoolComponent'
import './Resume.css'

const Resume = () => {
  return (
    <div className='resume-page'>
      <h1>Resume</h1>
      <div className='resume-components'>
        <SchoolComponent />
        <JobComponent />
      </div>
    </div>
  )
}

export default Resume