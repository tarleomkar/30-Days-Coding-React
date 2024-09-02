import React from "react";
import MobileList from "./MobileList";
import "../index.css";
import books from "./books/books.json";

function Mobile() {
  return (
    // We are going through the array (books) one by one using the map method
    // Key Changes:
    // 1.Correct Placement of return: The return statement has been placed inside the Mobile functional component.
    // Importing JSON Data: The JSON data is imported as books from the books.json file. Make sure that your books.json file exports 2.2. an array of objects.
    // 3. Unique Key Prop: When rendering lists in React, each item must have a unique key prop. I added index as the key. Ideally, use a unique identifier if available in your data.
    <div>
      {books.map((ele, index) => (
        <MobileList
          key={index}
          image={ele.image}
          title={ele.title}
          price={ele.price}
        />
      ))}
    </div>
  );
}

export default Mobile;
