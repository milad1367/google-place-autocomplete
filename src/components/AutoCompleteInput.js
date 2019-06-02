import React  from 'react';
import PropTypes from 'prop-types';
import  PredictionList  from './PredictionList'
import Input from '@material-ui/core/Input';
import HistoryList from './HistoryList';
import Map from './Map'
import onClickOutside from "react-onclickoutside";   
import Paper from '@material-ui/core/Paper';

const style = {
  parent:{
    position:'relative'
  },
  autoComplete: {
    zIndex: 10,
    position:'absolute',
    right:10,
    top:10,
    width: '30vw',
  },
  input: {
    padding: 16
  }
}

  
class AutoCompleteInput extends React.Component {
  handleClickOutside = evt => {
    this.props.onBlur();
  };
  render() {
    return (
    <div style={style.parent}>
    <div style={style.autoComplete}>
    <Paper>
        <Input 
            style={style.input}
            placeholder="Type your addres"
            fullWidth
            type="text" 
            value={this.props.value} 
            onChange={ e => this.props.onChange(e.target.value)} 
            onFocus={this.props.onFocus}
        />
      </Paper>


      {this.props.showHistory?
      <HistoryList 
        list={this.props.userHistory} 
        onClick={this.props.selectFromHistory}  
      />
      :null}
      {this.props.showPrediction?        
      <PredictionList 
           predictions={this.props.sugesstion}
           onSelect={this.props.onSelect}
           location={this.props.location}
         />
      :null}

    </div>

        <Map  location ={this.props.location} />
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
export default onClickOutside(AutoCompleteInput);
