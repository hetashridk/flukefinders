
// import './App.css'

import { Route, Routes } from "react-router-dom"
import Card from "./components/card"
import Success from "./components/success"
import Cancel from "./components/cancel"
// import {Routes,Route} from "react-router-dom"






function App() {

  return (
    <>
    <Card />
        {/* <Routes>
            <Route path="/" element={<Card />} />
            <Route path="/success" element={<Success />} />
            <Route path="/" element={<Cancel />} />
        </Routes> */}
    </>
  )
}

export default App
