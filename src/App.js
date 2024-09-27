// App.js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    const increment = () => {
        dispatch({ type: 'INCREMENT', payload: { value: 1 } });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT', payload: { value: 1 } });
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

export default App;
