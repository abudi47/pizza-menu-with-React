import React from "react";
import { Header } from "./Header";
import Pizza from "./Pizzaa";
import { Footer } from "./Footer";

// import foc from "../pizzas/focaccia.jpg";

// import "../pizzas";
export const Menu = () => {
  return (
    <main className="menu">
      <Header />
      <h2> Our menu</h2>
      <Pizza
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/funghi.jpg"
        price={10}
      />
      <Pizza 
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/focaccia.jpg"
        price={10}
      />

      <Pizza 
      
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/salamino.jpg"
        price={10}
      
      /> 
      <Pizza 
      
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/margherita.jpg"
        price={10}
      
      /> 
      <Pizza 
      
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/prosciutto.jpg"
        price={10}
      
      /> 
      <Pizza 
      
        name="Pizza spinacci"
        ingredients="Tomato , mozarella , spinach , and cheese"
        photo= "/pizzas/spinaci.jpg"
        price={10}
      
      /> 
      <Footer />
    </main>
  );
};
