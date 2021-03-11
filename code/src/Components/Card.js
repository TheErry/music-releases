import React from "react";
import Artist from "./Artist";
import Release from "./Release";
import AlbumImage from "./AlbumImage";

const Card = (props) => {
  return (
   
    <div className="album-card">
        <AlbumImage image={props.image} />
        <Release release={props.release} releaseUrl={props.releaseUrl}/>
        <Artist artist={props.artist} artistUrl={props.artistUrl}/> 
    </div> 
  );
 };

 export default Card
