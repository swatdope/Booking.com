import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} >
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

