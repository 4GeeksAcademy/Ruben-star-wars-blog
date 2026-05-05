export const initialStore = () => {
  return {
    favorites: [],
    characters: [],
    starships: [],
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return { ...store, characters: action.payload };

    case 'SET_STARSHIPS':
      return { ...store, starships: action.payload };

    case 'SET_PLANETS':
      return { ...store, planets: action.payload };

    case 'ADD_FAVORITE':
      return { ...store, favorites: [...store.favorites, action.payload] };

    case "REMOVE_FAVORITE":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav => !(fav.id === action.payload.id && fav.type === action.payload.type)
        )
      };

    default:
      throw Error('Unknown action.');
  }
}
