import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({item}) => {
  const { name, username, id } = item
  const {state,dispatch} = useContextGlobal()
  const isFav = state.favs.some(dentist => dentist.id === item.id)
  const location = useLocation()

  const dentist = {
    name,
    username, 
    id
  }  
  
  const addFav = ()=>{
    if(isFav) {
      alert("Este profesional ya se encuentra en su lista de favoritos")
    } else{ 
      alert(`${name} agregado a favoritos correctamente`)
      dispatch({type: 'ADD_FAV', payload: dentist})
    }
  }

  return (
    <div className="card">
        <img className="card-img" src="/images/doctor.jpg" alt="" />
        <Link to={'/dentist/' + id}><h3>{name}</h3></Link>
        <p>{username}</p>
        {location.pathname === '/favs' || <button onClick={addFav} className="favButton">⭐</button>}
    </div>
  )
}

export default Card
