import React, { useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import Pokemon from './components/Pokemon.js'

const App= () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Pokemon/>}/>
    </Routes> 
    </>
  );
}

export default App;

