import React, { useState } from 'react';
import './App.css';
import Nav from './components/Navigate';



export default function App() {
  const [currentCategory, setCurrentCategory] = useState("Home");
  const returnCategory = () => {
    if (currentCategory === "Home") {
      //  return <Home />;
    }
    if (currentCategory === "Pictures") {
      //   return <Pictures />;
    }
    if (currentCategory === "Reviews") {
      // return <Reviews />;
    }
    if (currentCategory === "SignUp") {
      //   return <SignUp />;
    }
  };
  const CategoryChange = (category) => setCurrentCategory(category);

  return (
    <div>
      <header>
        {/* <h1>Jonathan Martin</h1> */}
        <Nav
          currentCategory={currentCategory}
          CategoryChange={CategoryChange}
        />
      </header>
      <main>{returnCategory()}</main>
      <footer></footer>
    </div>
  );
};
