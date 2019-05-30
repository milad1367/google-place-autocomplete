import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPredictions } from '../actions'
import { getLocation } from '../actions'
import  PredictionList  from '../components/PredictionList'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {input:""}
    this.inputHandleChange = this.inputHandleChange.bind(this);
  }
  inputHandleChange(e) {
    this.setState({input: e.target.value});
    this.props.dispatch(getPredictions(e.target.value));
  }
   onSelect = (placeId) => {
    this.props.dispatch(getLocation(placeId));
    this.setState({input:""})
  }
  render() {
    const { predictions,location } = this.props
    return (
      <div>
        <input 
          value={this.state.input} 
          onChange={this.inputHandleChange}
        />
        <PredictionList 
           predictions={predictions.items}
           onSelect={this.onSelect}
           location={location}
         />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
    state
)
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => dispatch(action),
};
}

export default connect (mapStateToProps,mapDispatchToProps )(Main);
