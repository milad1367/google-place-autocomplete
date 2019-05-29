import React from 'react'
import PropTypes from 'prop-types'
import Map from './Map'
const style = {
  width: '100vw',
  height: '100vh'
}

const PredictionList = ({ predictions,onClick,location }) => (
  <div>
    <ul>
      {predictions.map(item =>
        <li key = {item.id} onClick={()=>onClick(item.place_id)}>
          {item.description}
        </li>
      )}
    </ul>
    <div style={style}>
      <Map location ={location} />
    </div>
  </div>

)

PredictionList.propTypes = {
    predictions: PropTypes.array.isRequired
}

export default PredictionList