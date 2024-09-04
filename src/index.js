import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


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

function App(){
  return(
    <div className ="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>
  );
}

function Header()
{
  return(
  <Header className ="header">
    <h1>Fast React Pizza co.</h1>
  </Header>
  );
}

function Menu()
{
  const pizzas =pizzaData
return (
      <main className ="menu">
        <h2>Our Menu</h2>

          {pizzas ? (
            //   react Fargments
            <React.Fragment>
          <p>
                Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
          </p>
          <ul className = "pizzas">
              {
                pizzas.map((pizza)=>(
                <Pizza pizzaObj ={pizza} key={pizza.name} />)
              )}
        </ul>
        </React.Fragment>
          ) : (
            <p>we're still working on our menu . please come back later :)</p>
          )} 
      </main>
);
}

function Footer()
{
  const openHour = 12;
  const closeHour = 22;
  const hour =new Date().getHours();
  const isOpen =hour >= openHour && hour <= closeHour;

    return( 
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour}/> :
      <p>we're  happy to welcome you bettwen {openHour}:00 and {closeHour}:00</p>
      }
        </footer>
  );
  //  React.createElement('footer', null ,"we're curently open");
}

function Order({closeHour}){
  return ( 
  <div className="order">
      <p>we're  open until {closeHour}:00 ,come vist us or order online </p>
      <button className="btn"> Order </button>
  </div>
);
}

