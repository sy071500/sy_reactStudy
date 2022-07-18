import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByAmount} from "../feautures/counter/counterSlice"

export default function Counter2() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}
