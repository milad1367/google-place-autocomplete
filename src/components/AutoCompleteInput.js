import React  from 'react';
import PropTypes from 'prop-types';
import  PredictionList  from './PredictionList'

class AutoCompleteInput extends React.Component {
  render() {
    return (
    <div>
      <input 
        type="text" 
        value={this.props.value} 
        onChange={ e => this.props.onChange(e.target.value)} 
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
      />
{ this.props.showHistory?<ul>
          {this.props.userHistory.map((item)=> <li key={item} onClick={(e) => {e.preventDefault();this.props.selectFromHistory(item)}}>{item}</li>)}
        </ul> : null}
        <PredictionList 
           predictions={this.props.sugesstion}
           onSelect={this.props.onSelect}
           location={this.props.location}
         />
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
    selectFromHistory: PropTypes.func.isRequired
};
AutoCompleteInput.defaultProps = {
  userHistory: [],
}
export default AutoCompleteInput;
