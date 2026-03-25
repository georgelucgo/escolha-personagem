import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Personagem from './pages/personagem'

function App() {
  const [name, setName] = useState("")

  return (
    <Routes>
     
     <Route path="/" element = {<Home />} />
     <Route path="/personagem/:id" element = {<Personagem />} />
     <Route path="*" element = {<NotFound />} />
       
    </Routes>
  )
}

export default App
