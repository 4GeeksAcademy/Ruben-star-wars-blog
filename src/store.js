export const initialStore=()=>{
  return{
    characters: [],
    starships: [],
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'SET_CHARACTERS':
      return { ...store, characters: action.payload };

    case 'SET_STARSHIPS':
      return { ...store, starships: action.payload };

    case 'SET_PLANETS':
      return { ...store, planets: action.payload };

    default:
      throw Error('Unknown action.');
  }    
}
