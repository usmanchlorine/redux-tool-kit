import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbyAmount } from './redux/slices/counter';
function App() {
  const count = useSelector((state) => state.counter)
  console.log(count);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>hello {count.value}</h1>
      <button onClick={() => dispatch(increment())}>increment </button>
      <button onClick={() => dispatch(incrementbyAmount(2))}>increment by 2 </button>
      <button onClick={() => dispatch(decrement())}>decrement </button>
    </div>
  );
}

export default App;
