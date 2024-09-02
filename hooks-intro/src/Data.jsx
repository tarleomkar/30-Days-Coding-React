import React, { useState } from "react";
import Datas from "./Datas.json";

const Data = () => {
  const [nData, setnData] = useState(Datas);
  // console.log(Datas[0]);
  // const handleClick = () => {
  // setnData([])
  // }

  const handleUpdate = (itemId) => {
    setnData(nData.map(items => {
      if(items.id === itemId) {
        return{name: "newName"}
      }
      else {
        return items;
      }
    }));
  }

  const handleRemove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ul>
        {nData.map((items) => (
          <li key={items.id}>
            {items.name}
            <br />
            <button onClick={() => handleUpdate(items.id)}>Update</button>
            <button onClick={() => handleRemove(items.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setnData([])}>Clear</button>
    </div>
  );
};

export default Data;
