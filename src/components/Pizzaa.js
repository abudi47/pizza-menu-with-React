import React from 'react'

const Pizzaa = (props) => {
  return (
    <div className='pizza'>
    <img src={props.photo} alt={props.name}/ > 
    <div>
        <h1>{props.name}</h1>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
    </div>
     


    
</div>
  )
}

export default Pizzaa