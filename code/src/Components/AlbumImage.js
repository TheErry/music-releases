import React from 'react';

const AlbumImage = (props) => {
    const image = props.image.url;
    
    
    return (
      <div>
      <img src={image} alt="Album image"/>
      </div>
    )
  }
  
  export default AlbumImage;