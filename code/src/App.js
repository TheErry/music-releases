import React from 'react'
import data from './data.json'
import CardContainer from "./CardContainer"


console.log(data)

console.log(data.album)

const App = () => {
  return ( 
    <div>
      <CardContainer data={data.albums.items} />
    </div>
  
  );
  };
 
export default App;
