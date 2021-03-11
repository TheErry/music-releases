import React from "react";
import Artist from "./Artist";
import Release from "./Release";
import AlbumImage from "./AlbumImage";
import IconContainer from "./IconContainer";

const Card = (props) => {
  return (
   
    <div className="album-card">
      <div className="image-container">
        <AlbumImage image={props.image} />
        <IconContainer/>
      </div>
        <Release release={props.release} releaseUrl={props.releaseUrl}/>
        <Artist artist={props.artist} artistUrl={props.artistUrl}/> 
    </div> 
  );
 };

 export default Card
