import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map'
const style = {
  width: '100vw',
  height: '100vh'
}

const PredictionList = ({ predictions,onSelect,location }) => (
  <div>
    <ul>
      {predictions.map(item =>
        <li key = {item.place_id} onClick={()=>onSelect(item.place_id)}>
          {item.description}{item.formatted_address}
        </li>
      )}
    </ul>
    <div style={style}>
      <Map location ={location} />
    </div>
  </div>

)

PredictionList.propTypes = {
    predictions: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    location : PropTypes.object.isRequired
}

export default PredictionList