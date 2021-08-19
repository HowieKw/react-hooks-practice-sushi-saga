import React from "react";


//Second step: finish the rendering by placing the passed data
function Sushi({ sushi,eatTheSushi }) {

  const { name, img_url, price } = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatTheSushi(sushi)}>
        {/* added eaten key here, arrow function to make sure it only runs on click*/}
        {sushi.eaten ? null : (
          <img
            src={img_url}
            alt={`${name} Sushi`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
