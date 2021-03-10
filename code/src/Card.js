import React from "react";
import Artist from "./Artist";

const Card = (props) => {
  return (
  
    <div className="album-card">
        <Artist artist={props.artist} artistUrl={props.artistUrl}/> 
    </div> 
  );
 };

 export default Card
