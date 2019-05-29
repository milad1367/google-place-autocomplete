import { connect } from 'react-redux'
import React from 'react'
import  PredictionList  from '../components/PredictionList'
import { getLocation } from '../actions'
const mapStateToProps = state => ({
    predictions: state.predictions.items,
    location: state.location
})
const mapDispatchToProps = (dispatch) => ({
   onClick: (placeId) => dispatch(getLocation(placeId))
})
export default connect(
    mapStateToProps,mapDispatchToProps  
)(PredictionList)
