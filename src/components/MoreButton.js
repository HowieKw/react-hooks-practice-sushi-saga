import React from "react";

//Third step: finish the step by passing the function for more sushi
function MoreButton({ moreSushi }) {
  return <button onClick={moreSushi}>More sushi!</button>;
}

export default MoreButton;
