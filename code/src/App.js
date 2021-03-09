import React from 'react'
import data from './data.json'
import { Album } from "./Album"

console.log(data)

console.log(data.album)

export const App = () => {
  return (
    // <div>
    //   <Album />
    // </div>
    <div>
      <Album length="1"/>
    </div>
  
  )
  };
