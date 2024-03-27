import React from 'react'
import {routes} from './utils/routes'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {

  const {state, handleChangeTheme} = useContextGlobal()

  return (
    <nav style={{background: state.theme.background, color:state.theme.font}}>
      <img src="/images/DH.png" alt='DH-logo' style={{width: 300, margin: 0}}/>
      <ul>
        <Link to={routes.home}><h2>Home</h2></Link>
        <Link to={routes.contact}><h2>Contact</h2></Link>
        <Link to={routes.favs}><h2>Favs</h2></Link>
        <button onClick={handleChangeTheme} >Change Theme</button>
      </ul>
    </nav>
  )
}

export default Navbar