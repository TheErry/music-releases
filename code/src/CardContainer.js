import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
  return (
    <div className="cardContainer">
      {props.data.map((item) => 
      <Card artist={item.artists} artistUrl={item.artists[0].external_urls}/>
      )}
    </div>
  )
}
export default CardContainer;