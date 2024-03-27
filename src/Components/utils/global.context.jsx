import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import React from "react";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext();

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: '#12121296'
  }
}

const initialState = {
  dentistList: [],
  dentistData: {},
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  theme: themes.light
}

const ContextProvider = ({ children }) => {

  const url = 'https://jsonplaceholder.typicode.com/users'

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect( () => {
    axios(url)
    .then(res => dispatch({type: 'GET_DENTISTLIST', payload: res.data}))
  },[])

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])

  const handleChangeTheme = () => { 
    if (state.theme === themes.dark) dispatch({type: 'CHANGE_THEME', payload:themes.light})
    if (state.theme === themes.light) dispatch({type: 'CHANGE_THEME', payload:themes.dark})
  }

  return (
    <ContextGlobal.Provider value={{state, dispatch, handleChangeTheme}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)
