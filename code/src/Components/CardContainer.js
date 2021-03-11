import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
    return ( 
        <div className = "cardContainer" > {
            props.data.map((item) => 
              <Card image = {item.images[1]} release = {item.name} releaseUrl = {item.external_urls.spotify} 
              artist = {item.artists} artistUrl = {item.artists[0].external_urls} 
                 />    
            )};
        </div>  
    )
}
export default CardContainer;

 {/* {{props.data.map((item) =>
              <Card release = {item.name} releaseUrl = {item.external_urls.spotify}/> 
            )
        }} */}

        //hela adressen bild albums.items[0].images[1].url