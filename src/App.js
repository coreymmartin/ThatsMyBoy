import React, { useState } from 'react';
import Home from './components/Home/index';
import Nav from './components/Navigate';
import Pictures from './components/Pictures/index';
import Reviews from './components/Reviews/index';
import SignUp from './components/SignUp/index';


export default function App() {
  const [currentCategory, setCurrentCategory] = useState("Home");
  const returnCategory = () => {
    if (currentCategory === "Home") {
      return <Home />;
    }
    if (currentCategory === "Pictures") {
      return <Pictures />;
    }
    if (currentCategory === "Reviews") {
      return <Reviews />;
    }
    if (currentCategory === "SignUp") {
      return <SignUp />;
    }
  };
  const CategoryChange = (category) => setCurrentCategory(category);





  return (
    <div>
      <header>
        <Nav
          currentCategory={currentCategory}
          CategoryChange={CategoryChange}
        />
      </header>
      <main>{returnCategory()}</main>

      <footer className='footer'>can this please fucking work</footer>
    </div>
  );
};


