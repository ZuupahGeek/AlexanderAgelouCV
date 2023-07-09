import {useState} from 'react';
import './ResumeComponent.css';



const ResumeComponent = ({resumeList = [{}], heading}) => {

    let [showMore, setShowMore] = useState(1);
    let arrayLength = resumeList.length + 1;

    function handleShowMore() {
      if (showMore === 1) {
        setShowMore(arrayLength)}
        else {
        setShowMore(1)
      }
    }

    const resumeListMap = resumeList.slice(0, showMore).map(
      (element, id) => {
        return (
          <div className='card' key={id}>
              <div className='card-content' >
                  <h2>{element.title}</h2>
                  <div className='date-text'><p>{element.date}</p></div>
                  <h5>{element.location}</h5>
                  <p>{element.description}</p>
                  {element.description1 != null ? <li>{element.description1}</li> : ""}
                  {element.description2 != null ? <li>{element.description2}</li> : ""}
                  {element.description3 != null ? <li>{element.description3}</li> : ""}
              </div>
          </div>
              
        ) 
      }
    )

  return (
    <div className='rendered'>
            <h1>{heading}</h1>
            {resumeListMap}
            <button className="btn" onClick={() => handleShowMore()}>
            {showMore === 1 ? "Visa Mer" : "Visa Mindre"}
            </button>
    </div>
  )
}

export default ResumeComponent