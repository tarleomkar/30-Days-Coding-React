import React, { useReducer } from 'react';

// Initial state for useReducer
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Reducer function to manage state transitions
function reducer(state, action) {
  console.log(state, action); // Log state and action for debugging

  switch (action.type) {
    case 'FETCH_DATA_START':
      // Set loading to true
      return { ...state, loading: true };

    case 'FETCH_DATA_SUCCESS':
      // Set loading to false, clear error, and update data
      return { ...state, loading: false, error: null, data: action.payload };

    case 'FETCH_DATA_FAILURE':
      // Set loading to false and update error
      return { ...state, loading: false, error: action.payload };

    case 'DELETE_DATA':
      // Filter out the deleted item by id
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case 'ADD_DATA':
      // Add new data to the existing state
      return { ...state, data: [...state.data, action.payload] };

    default:
      // Return the current state if no action type matches
      return state;
  }
}

const UserReducer2 = () => {
  // useReducer hook to manage state with the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCH_DATA_START' }); // Start loading

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: data,
      }); // Fetch successful, update data
      console.log(data);
    } catch (error) {
      dispatch({
        type: 'FETCH_DATA_FAILURE',
        payload: error.message,
      }); // Fetch failed, update error
    }
  };

  const deleteData = (id) => {
    dispatch({
      type: 'DELETE_DATA',
      payload: id,
    });
  };

  const addData = (newData) => {
    dispatch({
      type: 'ADD_DATA',
      payload: newData,
    });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>

      {/* Conditional rendering for loading and error states */}
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}

      {/* Display the data */}
      <ul>
        {state.data.map((item) => (
          <li key={item.id}>
            {item.title}{' '}
            <button onClick={() => deleteData(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Form to add new data */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Fix: preventDefault should be called on event object
          const title = e.target.elements.title.value; // Get input value
          addData({
            id: Date.now(), // Generate unique ID using Date.now()
            title: title,
          });
          e.target.reset(); // Reset form after submission
        }}
      >
        <input type="text" name="title" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UserReducer2;
