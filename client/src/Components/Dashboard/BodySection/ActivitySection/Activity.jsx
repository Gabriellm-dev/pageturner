//import React from 'react'
import './activity.css'


const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Livros Adicionados Recentemente</h1>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          
          <div className="customerDetails">
            <span className="name">Harry Potter</span>
            <small>J. K. Rowling</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>

      </div>
    </div>
  )
}

export default Activity