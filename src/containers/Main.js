import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPredictions } from '../actions'
import { getLocation } from '../actions'
import  PredictionList  from '../components/PredictionList'
import IntegrationAutosuggest from '../components/IntegrationAutosuggest'
import AutoCompleteInput from '../components/AutoCompleteInput'
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {input:"",sugesstion:[],showHistory: false}
    this.inputHandleChange = this.inputHandleChange.bind(this);
  }
  componentDidMount(){
    this.setState({
      sugesstion: this.props.predictions.items,
      userHistory: this.props.searchHistory

    
    });

  }
  /*
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.predictions.items != this.props.predictions.items) {
      this.setState({sugesstion: this.props.predictions.items});

    }
  
    

 }
   */
  inputHandleChange(value) {
    this.props.dispatch(getPredictions(value));
    this.setState({input:value});
    this.setState({showHistory: false});

   
  }
   onSelect = (placeId) => {
    let value = {placeId: placeId,userSearch:this.state.input}
    this.props.dispatch(getLocation(value));
    this.setState({
                   input:"",
                   sugesstion: [],
                  })
    this.setState({sugesstion: []});
  }
  onFocus= () => {
    if(this.props.searchHistory.length && !this.state.input.length) {
      this.setState({showHistory: true});
    }
  }
  onBlur = () => {
   // this.setState({showHistory: false});
  }
  selectFromHistory = (value) => {
    this.inputHandleChange(value)
  }
  render() {
    const { predictions,location } = this.props
    return (
      <div>
        <AutoCompleteInput 
           userHistory={this.props.searchHistory} 
           location={location} 
           onSelect={this.onSelect} 
           onFocus={this.onFocus} 
           sugesstion={predictions.items} 
           value={this.state.input}  
           onChange={(value) => this.inputHandleChange(value)}
           showHistory={this.state.showHistory}
           onBlur={this.onBlur}
           selectFromHistory = {this.selectFromHistory}
           />
        {
          /*
        <input 
          value={this.state.input} 
          onChange={this.inputHandleChange}
        />
       
        <PredictionList 
           predictions={predictions.items}
           onSelect={this.onSelect}
           location={location}
         />
          */
        }
        <IntegrationAutosuggest test={predictions.items} />
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
