import React from "react";
import ReactDOM from "react-dom/client";
import { Menu } from "./components/Menu";
import "./index.css";
// import sala from "./pizzas";
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App () {
    return (
        <div className="container">
            
             <div className="header">
                <h1>Welcome </h1>


             </div>
            <PizzaList />
            <Menu />

        </div>);
}

function PizzaList () {
   return (
    <div>
        <h2>Pizza list</h2>
        <ul>
            {pizzaData.map((p) => (
                <li key={p.id}>
                    {p.name} - ${p.price}
                </li>
            ))}
        </ul>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
        <App />
</React.StrictMode> 
);


