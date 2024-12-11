import React from 'react'

export const Footer = () => {
    // const hour = new Date().getHours();
    // const openhr = 8
    // const closedhr = 21;

    // if (hour >= openhr && hour <= closedhr ) {
    //     alert ("we're currently opened")
    // }
    // else {
    //     alert ("we are closed")
    // }
  return (
    
    <footer>
        
        <h5> {new Date().toLocaleTimeString()}.  we're cuureently open</h5>

    </footer>
  )
}
