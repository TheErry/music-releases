import React from "react";

const Artist = (props) => {
  const artistName = props.artist[0].name;
  const artistUrl = props.artist[0].external_urls.spotify
  
  return (
    <div>
    <a href={artistUrl}>
      {artistName}
    </a>
    </div>
  )
}

export default Artist;