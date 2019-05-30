
  const searchHistory = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return [...state,action.location]
      default:
        return state
    }
  }
  
  export default searchHistory