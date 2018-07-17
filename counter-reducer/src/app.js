import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

const Counter = ({
  value,
  onIncrement,
  }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
)

// dispatcher
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

const store = createStore(counter)

const render = () => {
  ReactDOM.render(
      <Counter
        value={store.getState()}
        onIncrement={() =>
          store.dispatch({
            type: 'INCREMENT'
          })}
      />,
      document.getElementById('root')
    )
}

store.subscribe(render)

render()
