import React from 'react'

const initialState = { count: 0 }

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { count: state.count + 1 }
    case 'decrease':
      return { count: state.count !== 0 ? state.count - 1 : (state.count = -1) }
    default:
      throw new Error('Error occured')
  }
}

export default function Counter() {
  const [state, dispatch] = React.useReducer(counterReducer, initialState)
  return (
    <div>
      <h2 className="mb-5">React Simple Counter with useReducer Example</h2>
      <div className="h-100 p-5 text-white bg-dark rounded-3">
        <h2>{state.count}</h2>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: 'decrease' })
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className="btn btn-success ms-2"
          onClick={() => {
            dispatch({ type: 'increase' })
          }}
        >
          Increase
        </button>
      </div>
    </div>
  )
}