import React from 'react';
import Card from './Card'

const CardContainer = (props) => {
    return ( 
        <div className = "card-container" > {
            props.data.map((item) => 
              <Card 
                key={item.external_urls.spotify} 
                image = {item.images[1]} 
                release = {item.name} 
                releaseUrl = {item.external_urls.spotify} 
                artist = {item.artists} 
                artistUrl = {item.artists[0].external_urls}/>    
            )};
        </div>  
    )
}
export default CardContainer;
