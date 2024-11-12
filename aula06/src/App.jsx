
import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'

import Dpo_lgpd from './pages/Dpo_lgpd'
import NavBar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'
import NoticiasAxios from './pages/NoticiasAxios'


  const App = () => {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path= '/' element={<Inicial/>} />
        <Route path= '/faculdade' element={<Faculdade/>} />
        <Route path= '/dpo' element={<Dpo_lgpd/>} />
        <Route path= '/noticias' element={<NoticiasAxios/>} />
        <Route path= '/visualiza-noticia/:id' element={<VisualizaNoticia/>} />

      </Routes>
    
    </BrowserRouter>

  )
}

export default App