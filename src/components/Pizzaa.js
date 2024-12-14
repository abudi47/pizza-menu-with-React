import React from 'react'

const Pizzaa = ({pizzaobj}) => {
  return (
    <li className='pizza'>
    <img src={pizzaobj.photoName} alt={pizzaobj.name}/ > 
    <div>
        <h1>{pizzaobj.name}</h1>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.price}</span>
    </div>
     


    
</li>
  )
}

export default Pizzaa