import React from 'react'

export const Footer = () => {
    const hour = new Date().getHours();
    const openhr = 8
    const closedhr = 21;
    const date = new Date().toLocaleTimeString();

    const isOpen = hour >= openhr && hour <= closedhr ;

  return (
    
    <footer className='footer'>
        <div className='order'>
        {isOpen && (  <p>we're currently opened , {date}</p>)}
        <button className='btn'>Order Now

        </button>
        </div>
    </footer>
  )
}
