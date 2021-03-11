import React from 'react';

const AlbumImage = (props) => {
    const image = props.image.url;
    
    
    return (
      <img src={image} alt="Album image"/>
    )
  }
  
  export default AlbumImage;