import React from 'react'
import "./OneLineDiv.css"

 const OneLineDiv = ({p}) => {
  return (
    <div className='div-text'>
        <div className="oneline-text">
          <p>{p}</p>    
        </div>  
    </div>
  )
}
export default OneLineDiv;
