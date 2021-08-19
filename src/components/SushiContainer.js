import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ allSushi,eatTheSushi }) {

  const [ sushiIndex, setSushiIndex ] = useState(0);

  //Second step: passing allSushi to sushi and render. 
  //-.map first to render.
  //-next need to make it render only the first 4 array objects
  //-create a state for the index 
    //-Can be placed in App.
    //Just const firstFour = allSushi.slice(sushiIndex, sushiIndex + 4) then pass this as allSushi
  const displaySushi = 
  allSushi
    .slice(sushiIndex, sushiIndex + 4)
    .map((sushi) => 
      <Sushi 
      key={sushi.id}
      sushi={sushi}
      eatTheSushi={eatTheSushi}
      />
  );

  //Third step: get the more sushi button to get more sushi, the next four and cycle 
  //pass onto the button
    // Another way: const handleMoreSushi = () => {setSushiIndex(sushiIndex + 4)}
    // Can be put into App.js and be passed all the way to button
  function handleMoreSushi() {
    setSushiIndex((sushiIndex + 4) % allSushi.length)
  }

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton moreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
