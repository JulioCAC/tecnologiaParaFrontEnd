import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to= "/">Inicial</Link><br/>
        <Link to= "/faculdade">Faculdade</Link><br/>
        <Link to= "/dpo">Dpo_lgpd</Link><br/>
        <Link to= "/noticias">Noticias</Link><br/>
    </div>
  )
}

export default NavBar