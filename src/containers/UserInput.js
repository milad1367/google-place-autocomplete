import React from 'react'
import { connect } from 'react-redux'
import { getPredictions } from '../actions'

let UserInput = ({ dispatch }) => {
  let input

  return (
    <div>
        <input ref={node => {
          input = node
        }} onChange={e => {
            e.preventDefault();
            dispatch(getPredictions(input.value));
        }} />
    </div>
  )
}

UserInput = connect()(UserInput)

export default UserInput
