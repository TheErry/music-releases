import React from 'react';
import HeartIcon from "./HeartIcon"
import PlayIcon from "./PlayIcon"
import DotsIcon from "./DotsIcon"

const IconContainer = () => {
    // const heart = "./icons/heart.svg";
    // const play = "./icons/play.svg"
    // const dots = "./icons/dots.svg"
    
    return (
      <div className="icon-container">
        <HeartIcon/>
        <PlayIcon/>
        <DotsIcon/>
      </div>
    )
  }
  
  export default IconContainer;