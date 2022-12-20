import React, { useState } from 'react';
import Home from './components/Home/home';
import Nav from './components/Navigate/index';
import Pictures from './components/Pictures/index';
import Reviews from './components/Reviews/index';
import SignUp from './components/SignUp/index';
import Login from './components/Login/index';


export default function App() {
  const [currentCategory, setCurrentCategory] = useState("Home");
  const returnCategory = () => {
    if (currentCategory === "Home") {
      return <Home />;
    }
    else if (currentCategory === "Pictures") {
      return <Pictures />;
    }
    else if (currentCategory === "Reviews") {
      return <Reviews />;
    }
    else if (currentCategory === "SignUp") {
      return <SignUp />;
    }
    else if (currentCategory === "Login") {
      return <Login />;
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
