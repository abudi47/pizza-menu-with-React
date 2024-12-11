import React from 'react'
import { Header } from './Header'
import Pizza from './Pizzaa'
import { Footer } from './Footer'

export const Menu = () => {
  return (
    <main className='menu'>  
        <Header />
        <h2> Our menu</h2>
        <Pizza />
        <Pizza />
        <Pizza />
        <Footer />

    </main>
  )
}
