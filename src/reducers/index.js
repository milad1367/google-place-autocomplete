import { combineReducers } from 'redux'
import predictions from './predictions'
import location from './location'


const autocompleteApp = combineReducers({
    predictions,
    location
})

export default autocompleteApp