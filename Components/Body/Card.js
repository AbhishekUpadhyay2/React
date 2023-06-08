import React from 'react'

const Card = () => {
  return (
    <div className='card-body'>
        <img className='food-img' src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pg71dxg6xfd3iz2ui3ja" alt='food-logo' />
        <div>
        <h3>Shaandar Shawarma by Roxtarz</h3>
        <p>Arabian, Lebensese, Biryani,chai</p>
        </div>
        <div className='rating'>
        <h5>4.3stars</h5>
        <ul>
            <li><h5>24 Mins</h5></li>
            <li> <h5>200 for two</h5></li>
        </ul>
        </div>
        

    </div>
  )
}

export default Card
