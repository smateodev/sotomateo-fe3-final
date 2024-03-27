export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTLIST':
      return {...state, dentistList: action.payload}
    case 'GET_DENTIST':
      return {...state, dentistData: action.payload}
    case 'ADD_FAV':
      return {...state, favs: [...state.favs, action.payload]}
    case 'CHANGE_THEME':
      return {...state, theme: action.payload}
  }
}