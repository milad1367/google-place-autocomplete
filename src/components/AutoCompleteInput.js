import React  from 'react';
import PropTypes from 'prop-types';
import  PredictionList  from './PredictionList'
import Input from '@material-ui/core/Input';
import HistoryList from './HistoryList';
import Map from './Map'

const mapDivStyle = {
  width: '100vw',
  height: '100vh'
}



   

class AutoCompleteInput extends React.Component {
  render() {
    return (
    <div>
      <Input 
          placeholder="Type your addres"
          fullWidth
          type="text" 
          value={this.props.value} 
          onChange={ e => this.props.onChange(e.target.value)} 
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
      />
      {this.props.showHistory?
      <HistoryList list={this.props.userHistory} onClick={this.props.selectFromHistory}  />
      :null}
      {this.props.showPrediction?        
      <PredictionList 
           predictions={this.props.sugesstion}
           onSelect={this.props.onSelect}
           location={this.props.location}
         />
      :null}
      <div style={mapDivStyle}>
        <Map location ={this.props.location} />
      </div>
    </div>
  )}
}


AutoCompleteInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    onFocus: PropTypes.func.isRequired,
    sugesstion: PropTypes.array.isRequired,
    onSelect : PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    userHistory: PropTypes.array,
    showHistory: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    selectFromHistory: PropTypes.func.isRequired,
    showPrediction: PropTypes.bool.isRequired
};
AutoCompleteInput.defaultProps = {
  userHistory: [],
}
export default AutoCompleteInput;
