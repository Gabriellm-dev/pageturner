//import React from 'react'
import './listing.css'
import { AiFillHeart } from 'react-icons/ai'
import img from '../../../../LoginAssets/content.jpg'


const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>Meus Livros</h1>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>Harry Potter</h3>
        </div>

      </div>
    </div>
  )
}

export default Listing