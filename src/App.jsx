import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/notfound'
import Personagem from './pages/personagem'

function App() {
  const [favoritos, setFavoritos] = useState(()=>{
  const dados = localStorage.getItem("favoritos")
    return dados ? JSON.parse(dados) : []
  })

  useEffect(()=> {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }, [favoritos])


  function adicionarFavorito(personagem){
    const existe = favoritos.find(f => f.id === personagem.id)
    if(!existe){
      setFavoritos([...favoritos, personagem])
    }
  }

  function removerFavorito(personagem){
   const novaLista = favoritos.filter(f => f.id !== personagem.id)
    setFavoritos(novaLista)
    
  }

  return (
    <Routes>
     
     <Route path="/" element = {<Home favoritos={favoritos} />} />
     <Route path="/personagem/:id" element = {<Personagem adicionarFavorito={adicionarFavorito} removerFavorito={removerFavorito} favoritos={favoritos} />} />
     <Route path="*" element = {<NotFound />} />
       
    </Routes>
  )
}

export default App
