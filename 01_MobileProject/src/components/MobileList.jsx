import React from "react";

function MobileList(props) {
  // This called destructuring
  const { image, title, price } = props;

  // NO NEED WE USED PROPS INSTEAD 😂
  // const image = 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false" alt="Redmi 12';
  // const title = 'Redmi 12';
  // const price = '$100';
  return (
    <div className="main">
      {console.log(props)}
      {/* {(props.greet)} */}
      <img className="image" src={image}></img>
      <div>
        <h2>{title}</h2>
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default MobileList;
