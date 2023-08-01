import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { increment,decrement,resetCount,incrementBy } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch =  useDispatch()
  return (
    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() =>  dispatch(decrement())}>-</button>
            <button onClick={() =>  dispatch(resetCount())}>Reset</button>
            <button onClick={() =>  dispatch(incrementBy(5))}>5</button>
        </div>
    </section>
  )
}

export default Counter