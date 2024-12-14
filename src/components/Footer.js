import React from 'react'

export const Footer = () => {
    const hour = new Date().getHours();
    const openhr = 8;
    const closedhr = 21;
    // const date = new Date().toLocaleTimeString();

    const isOpen = hour >= openhr && hour <= closedhr ;

  return (
    
    <footer className='footer'>
        <div className='order'>
        {isOpen ? ( <Order openhr={openhr} closedhr={closedhr} />) :
        (<p>closed</p>) }
        
        </div>
    </footer>
  )
}

function Order({closedhr , openhr}) {
  return (
    <div className='order'>
      <p>
        we are open from {openhr}:00 to {closedhr}:00. come visit us order online
      </p>
      <button className='btn'>Order Now </button>

    </div>
  )
}