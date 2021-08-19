import React , { useState, useEffect }from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

// App.js
// ├───Table.js
// └───SushiContainer.js
//     ├───MoreButton.js
//     └───Sushi.js
//          

const API = "http://localhost:3001/sushis";

function App() {
  const [ allSushi, setAllSushi ] = useState([])
  const [ wallet, setWallet ] = useState(200)

  //First step: Grab the data, make sure it renders that one time only (useEffect)
  //-Next take that data and put it in state
  //-Second .then (sushiData => setAllSushi(sushi))
  useEffect(() => {
    fetch(API)
    .then((resp) => resp.json())
    .then(sushiData => setAllSushi(sushiData))
  }, []);


    
  //Fourth step: show whether the sushi has been eaten or not by removing them from the plate
  // the sushi array objects need to be given a new key with eaten being false.
  const eatTheSushi = (eatenSushi) => {

    //Fifth step: can't eat for free. 'Eat' the sushi only when there is money available.
    if(wallet >= eatenSushi.price && !eatenSushi.eaten){

    //pass up the sushi that is being clicked on/eaten
    //make a copy of the allSushi array
    //find the individual sushi in that copy of the 
    const newSushi = [...allSushi]
    const updateSushi = newSushi.find(sushi => sushi.id === eatenSushi.id);
    updateSushi.eaten = true;
    setAllSushi(newSushi);
    setWallet(wallet - eatenSushi.price);
    } else if( wallet < eatenSushi.price){
      alert("No money, no food!")
    }
  }

  //Fifth step: need to make sure you can't spend money on an empty plate
  const alreadyEaten = allSushi.filter((eatenSushi) => eatenSushi.eaten);

  //Second step: start passin sushi and rendering them.
  return (
    <div className="app">
      <SushiContainer allSushi={allSushi} eatTheSushi={eatTheSushi}/>
      <Table wallet={wallet} plates={alreadyEaten}/>
    </div>
  );
}

export default App;
