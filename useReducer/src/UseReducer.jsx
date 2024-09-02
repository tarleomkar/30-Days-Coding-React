import React, { useReducer } from 'react';

const reducer = (state, action) => {
    console.log(state, action);

    // Handle actions to update state
    if (action.type === 'incr') {
        return { count: state.count + 1 };
    } else if (action.type === 'desc') {
        return { count: state.count - 1 };
    }
    else {
        throw new Error('Unsupported action type')
    }
    // return state; // Return current state if action type is not recognized
};

const UseReducer = () => {
    // const [count, setCount] = useState(0);
    // console.log(count);
    // console.log(setCount);

    // with help of useReducer
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    // reducer (coffee maker) function
    // it is pure function
    // contains = state (coffee powder) and action (water)
    // new state (coffee)

    // what is pure functions (returns same/right output if we returned right args)
    // 10 + 10 = 20

    const handleClick = () => {
        // setCount(count + 1);
        dispatch({ type: "incr" });
    };

    const handleClickDec = () => {
        // setCount(count - 1);
        dispatch({ type: "desc" });
    };

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClickDec}>-</button>
        </div>
    );
};

export default UseReducer;
