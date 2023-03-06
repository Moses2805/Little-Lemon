import './App.css';
import React from 'react';
import Main from './components/Main';
import { Routes, Route, Link } from 'react-router-dom'
import About from './components/About';
import Menu from './components/Menu';
import Book from './components/Book';
import MenuItemDetail from './components/MenuItemDetail';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {

  const meals = [
    {
      id: "0",
      name: "Bruschetta",
      price: "$11.00",
      description: "An Italian antipasto called bruschetta is made of grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
      imgLink: "Bruschetta.jpg"
    },

    {
      id: "1",
      name: "Greek salad",
      price: "$12.00",
      description: "Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.",
      imgLink: "Greek_salad.jpg"
    },

    {
      id: "2",
      name: "Grilled fish",
      price: "$9.00",
      description: "The fish is swiftly grilled over medium- or high-heat coals or over medium- or high-heat gas grill burners. Thinner fillets and steaks are grilled over direct fire.",
      imgLink: "Grilled_fish.jpg"
    },

    {
      id: "3",
      name: "Lemon dessert",
      price: "$7.00",
      description: "This cake is adored not only for its flavor but also for its texture and simplicity. A base of creamed butter and sugar, eggs, lemon, milk, and flour are among the most basic ingredients. We omitted the brown sugar and substituted extra granulated sugar instead.",
      imgLink: "Lemon_dessert.jpg"
    },


  ]

  return (
    <div className="App">

      <Header />

      <Nav />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu id={meals.id} name={meals.name} price={meals.price} meals={meals} />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/:id' element={<MenuItemDetail meals={meals} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
