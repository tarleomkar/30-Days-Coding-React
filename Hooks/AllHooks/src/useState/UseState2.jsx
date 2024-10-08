// src/useState/UseState2.jsx

import React, { useState } from 'react'; // 1. Imports
import data from '../data/datas.json'; // Adjust the path as needed

const UseState2 = () => { // 2. Component Definition
  const [nData, setnData] = useState(data.items); // 3. State Initialization
  console.log(nData[0].id); // 4. Log First Item ID

  return ( // 5. Return Statement
    <div>
      <h1>Items List</h1>
      <ul>
        {nData.map((item) => ( // Map through items
          <li key={item.id}>
            <h2>{item.name}</h2>
            <ul>
              <li>Category: {item.category}</li>
              <li>Price: ${item.price}</li>
              <li>Stock: {item.stock}</li>
            </ul>
          </li>
        ))};
      </ul>
    </div>
  );
};

export default UseState2; // 6. Export the Component
