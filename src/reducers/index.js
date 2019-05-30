import { combineReducers } from 'redux'
import predictions from './predictions'
import location from './location'
import serachHistory from './searchHistory'


const autocompleteApp = combineReducers({
    predictions,
    location,
    serachHistory
})

export default autocompleteApp