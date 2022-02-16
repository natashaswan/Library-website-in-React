import React, { useState } from "react";
import { BrowserRouter  as Router, Route, Routes} from "react-router-dom";
import './App.css';
import data from "./data";
import BooksFilterByYear from "./components/filters/BooksFilterByYear";
import BooksFilterByCategory from "./components/filters/BooksFilterByCategory";
import FilteredBooks from "./components/FilteredBooks";
import ShowAllBooks from "./components/ShowAllBooks";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";


function App() {

  //dropdown filter logic -- year
  const [filteredYear, setFilteredYear] = useState("2021");
  function filterChangeHandler(selectedYear){
  setFilteredYear( selectedYear )
  }

 //dropdown filter logic -- category
  const [currentCategory, setCurrentCategory] = useState ("Для детей")
  function onchangeFilterCategory (filteredCategory){
    setCurrentCategory(filteredCategory)
  }
 
  const filteredData = data.filter(e => {
    return new Date(e.AddTime).getFullYear().toString() === filteredYear && e.Category === currentCategory
  });
    
  function btnAllBooksHandler(){
    return <ShowAllBooks />
  }
  
  return (
    <div>    
   
    <Router>
    <Navbar/> 
      <Routes>
         <Route exact path="/" element={ <Home/> } />
         <Route  path="/catalogue" element={
          <>
            <BooksFilterByCategory selected = { currentCategory }  onchangeFilterCategory = { onchangeFilterCategory } />
            <BooksFilterByYear selected={ filteredYear } onChangeFilter={ filterChangeHandler }/>
            <FilteredBooks filteredBookList = { filteredData } />
            <button onClick={ btnAllBooksHandler }></button>
          </>
          } /> 
        <Route exact path="/about" element={ <About/> }/>    
      </Routes>
       
    </Router> 

    
    </div> 
     
);
}

export default App;
