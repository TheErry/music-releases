import React from "react";

const Release = (props) => {
  const releaseName = props.release;
  const releaseUrl = props.releaseUrl
  
  return (
    <div>
    <a href={releaseUrl}>
      {releaseName}
    </a>
    </div>
  )
}

export default Release;