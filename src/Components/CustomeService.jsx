import React from 'react'

const CustomeService = ({title,para,image}) => {
  return (
    <div>
        <div className="service-container-lower">
          <div className="service-container-lower-h1">
            <h1>{title}</h1>
            <p>
             {para}
            </p>
          </div>
          <div className="service-container-lower-card">
            <div className="service-container-lower-card-1 card-design"></div>
            <div className="service-container-lower-card-2 card-design"></div>
            <div className="service-container-lower-card-3 card-design"></div>
            <div className="service-container-lower-card-4 card-design"></div>
            <div className="service-container-lower-card-5 card-design"></div>
          </div>
        </div>
      
    </div>
  )
}

export default CustomeService
