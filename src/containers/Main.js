import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPredictions } from '../actions'
import { getLocation } from '../actions'
import Container from '@material-ui/core/Container';
import AutoCompleteInput from '../components/AutoCompleteInput'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {input:"",showHistory: false,showPrediction: true}
    this.inputHandleChange = this.inputHandleChange.bind(this);
  }
  componentDidMount(){
    this.setState({
      userHistory: this.props.searchHistory

    
    });

  }

  inputHandleChange(value) {
    this.setState({input:value});
    this.props.dispatch(getPredictions(value));
    if(value.length) {
      this.setState({showHistory: false,showPrediction:true});
    }
    else {
      this.setState({showHistory: true,showPrediction:false});
    }
  }
   onSelect = (item) => {
    let value = {placeId: item.place_id,userSearch:this.state.input}
    this.props.dispatch(getLocation(value));
    this.setState({input: item.description,});
  }
  onFocus= () => {
    if(this.props.searchHistory.length && !this.state.input.length) {
      this.setState({showHistory: true});
    }
    if(this.state.input.length) {
      this.setState({showPrediction:true})
      this.props.dispatch(getPredictions(this.state.input));
    }
  }
  onBlur = () => {
    setTimeout(
      () => {
        if(this.state.showHistory) {
          this.setState({showHistory: false});
        }
        

      },200
      
    );

  }
  selectFromHistory = (value) => {
    this.inputHandleChange(value);

  }
  render() {
    const { predictions,location } = this.props
    return (
          <Container>
            <Grid item xs={12}>
              <h1>
                 Wellcome React Redux AutoComplete!
              </h1>
            </Grid>
            <Grid item xs={4}>
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
                showPrediction = {this.state.showPrediction}
                />
              </Grid>
          </Container>
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
